import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @ViewChild('signInModal', { static: true }) signInModal: ElementRef;

  signInModalConfig: NgbModalOptions = {
    backdrop: 'static',
    centered: true,
    keyboard: false,
  };

  signUpForm: FormGroup;
  loginForm: FormGroup;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  // Ouvre la fenêtre modal quand le bouton ou CTRL+o est appuyé
  openSignUpModal(): boolean {
    this.modalService.open(this.signInModal, this.signInModalConfig);
    return this.modalService.hasOpenModals();
  }

  // Ferme la fenêtre modal
  closeSignUpModal(): boolean {
    this.modalService.dismissAll();
    return this.modalService.hasOpenModals();
  }

}
