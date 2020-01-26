import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { REASONS, Reason } from '../consts/reasons';
import { Router } from '@angular/router';

@Component({
selector: 'app-why-do-you-feel',
templateUrl: './why-do-you-feel.component.html',
styleUrls: ['./why-do-you-feel.component.scss']
})
export class WhyDoYouFeelComponent implements OnInit {
	@Input() emotion: string = this.route.snapshot.paramMap.get('emotion');
	reasons: Array<Reason>;
	selectedReason: Reason;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private router : Router
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

	selectReason(reason: Reason): void {
		this.selectedReason == reason ? this.selectedReason = null : this.selectedReason = reason;
	}

	clickNext() : void {
		this.router.navigateByUrl(`results-how-do-you-feel/${ this.emotion }/${ this.selectedReason.id }`)
	}

}
