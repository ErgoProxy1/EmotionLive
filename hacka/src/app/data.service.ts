import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {
  private endpoint = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';
  private subscriptionKey = "6067ec5bc9914d0a8ea0c3349872c700";
  
  constructor (private http: HttpClient) { };

  public getFaceDetails(dataURL) {
    let params = this.getParams();
    let headers = this.getHeaders(this.subscriptionKey);
    let blob = this.makeblob(dataURL);

    return this.http.post(
      this.endpoint,
      blob,
      {
        params,
        headers
      }
    )
    .pipe(
      tap(e => console.log(e))
    )
  }

  private getParams() {
    const httpParams = new HttpParams()
      .set('returnFaceId', 'true')
      .set('returnFaceLandmarks', 'false')
      .set(
        'returnFaceAttributes',
        'age,emotion'
      );

    return httpParams;
  }

  private getHeaders(subscriptionKey: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/octet-stream');
    headers = headers.set('Ocp-Apim-Subscription-Key', subscriptionKey);

    return headers;
  }

  private makeblob(dataURL) {
    const BASE64_MARKER = ';base64,';
    const parts = dataURL.split(BASE64_MARKER);
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }
}