import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { REASONS, Reason } from '../consts/reasons';
import { Router } from '@angular/router';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/services/auth.service';

@Component({
	selector: 'app-why-do-you-feel',
	templateUrl: './why-do-you-feel.component.html',
	styleUrls: ['./why-do-you-feel.component.scss']
})
export class WhyDoYouFeelComponent implements OnInit {
	@Input() emotion: string = this.route.snapshot.paramMap.get('emotion');
	reasons: Array<Reason>;
	selectedReason: Reason;
	angleLeft = faAngleLeft;

	current_reason = '';

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private router: Router,
		private db: AngularFirestore,
		private auth: AuthService
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
		console.log(this.reasons);
	}

	selectReason(reason: Reason): void {
		this.selectedReason == reason ? this.selectedReason = null : this.selectedReason = reason;
	}

	clickNext(): void {
		this.router.navigateByUrl(`results-how-do-you-feel/${this.emotion}/${this.selectedReason.id}`)
	}

	clickBack(): void {
		this.router.navigateByUrl('/how-do-you-feel');
	}

	updateReasons(){
		if (this.auth.fbAuth.auth.currentUser) {
			this.db.firestore.collection('custom_reasons')
			.where("uid", "==", this.auth.fbAuth.auth.currentUser.uid)
			.where("emotion", "==" , this.emotion)
			.where("id", ">=" , REASONS.length+1)
			.get().then((querry) => {
				querry.forEach((res)=>{
					REASONS.push({
						id: res.data().id,
						reason: res.data().custom_reason,
						imageUrl: './assets/three_dots.jpg',
						emotions: [res.data().emotion]
					})
				})
				this.setReasons();
			})
		}
	}

	addCustomReason(): void {
		if (this.auth.fbAuth.auth.currentUser) {
			this.db.firestore.collection('custom_reasons').doc(this.db.createId()).set({
				uid: this.auth.fbAuth.auth.currentUser.uid,
				id: REASONS.length + 1,
				emotion: this.emotion,
				custom_reason: this.current_reason
			}).then(()=>{
				this.updateReasons();
			})
		}
	}

}
