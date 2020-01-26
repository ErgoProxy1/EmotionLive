import { Component, ElementRef, OnInit, Renderer2, ViewChild, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-facial-recognition',
  templateUrl: './facial-recognition.component.html',
  styleUrls: ['./facial-recognition.component.scss']
})
export class FacialRecognitionComponent implements OnInit, OnDestroy {
  @ViewChild('video', { static: true }) videoElement: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  videoWidth = 0;
  videoHeight = 0;
  img;
  stream;
  dataUrl;
  faceApiResponse;
  intreval;
  emotion;

  constructor(
    private renderer: Renderer2,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.img = document.querySelector('.facial-image');
    this.startCamera();
    this.intreval = setInterval(this.capture, 500);
  }

  ngOnDestroy() {
    clearInterval(this.intreval);
    this.stream.getTracks().forEach(function(track) {
      track.stop();
    });
  }

  startCamera() {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        .then(
          this.attachVideo.bind(this)
        )
        .catch((e) => {
          console.log("Error:" + e);
        });
    }
  }

  attachVideo(stream) {
    this.stream = stream;
    this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
    this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
      this.videoHeight = this.videoElement.nativeElement.videoHeight;
      this.videoWidth = this.videoElement.nativeElement.videoWidth;
    });
  }

  capture = () => {
    this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
    this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
    this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);
    this.dataUrl = this.canvas.nativeElement.toDataURL("image/jpeg");

    document.querySelector('.facial-image').setAttribute('src', this.dataUrl);
  }

  scanImage() {
    this.emotion = 'scanning...'
    this.faceApiResponse = this.dataService.getFaceDetails(this.dataUrl).pipe(
      tap(data => {
        let highestValue = 0;
        let highestEmotion;
        Object.keys(data[0].faceAttributes.emotion).forEach(emotion => {
          if(data[0].faceAttributes.emotion[emotion] > highestValue) {
            highestValue = data[0].faceAttributes.emotion[emotion];
            highestEmotion = emotion;
          }
        });
        this.emotion = highestEmotion;
      })
    );
  }
}
