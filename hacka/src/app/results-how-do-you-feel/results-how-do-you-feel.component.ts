import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { REASONS } from '../consts/reasons';

@Component({
  selector: 'app-results-how-do-you-feel',
  templateUrl: './results-how-do-you-feel.component.html',
  styleUrls: ['./results-how-do-you-feel.component.scss']
})
export class ResultsHowDoYouFeelComponent implements OnInit {
  @Input() emotion: string = this.route.snapshot.paramMap.get('emotion');
  @Input() reasonId: string = this.route.snapshot.paramMap.get('id');
  reason: {};

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    REASONS.forEach(reason => {
      if (this.reasonId === reason.id.toString()) {
        this.reason = reason;
      }
    });
  }

}
