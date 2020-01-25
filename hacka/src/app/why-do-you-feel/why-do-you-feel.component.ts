import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { REASONS } from '../consts/reasons';

@Component({
  selector: 'app-why-do-you-feel',
  templateUrl: './why-do-you-feel.component.html',
  styleUrls: ['./why-do-you-feel.component.scss']
})
export class WhyDoYouFeelComponent implements OnInit {
  @Input() emotion: string = this.route.snapshot.paramMap.get('emotion');;
  reasons: Array<{}>;

  constructor(
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    this.setReasons();
  }

  ngOnChanges() {
    this.setReasons();
  }

  setReasons(): void {
    this.reasons = [];
    REASONS.forEach(reason => {
      if (reason.emotions.includes(this.emotion)) {
        this.reasons.push(reason);
      }
    });
  }

}
