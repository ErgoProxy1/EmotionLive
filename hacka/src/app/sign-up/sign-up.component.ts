import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  signUpForm: FormGroup;

  successMessage: String;
  errorMessage: String;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(75), Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(32)])
    })
  }

  ngOnDestroy() {
    this.errorMessage = '';
    this.successMessage = '';
  }

  tryRegister(form: FormGroup) {
    if (this.validateForm(form)) {
      this.auth.doRegister(form.value.username, form.value.email, form.value.password)
        .then(res => {
          this.errorMessage = '';
          this.successMessage = "Your account has been created";
          this.router.navigateByUrl('/home');
        }, err => {
          this.successMessage = '';
          this.errorMessage = err.message;
        })
    }
  }

  validateForm(form: FormGroup): boolean {
    if ((form.value.username as string).length < 3) {
      this.errorMessage = "Error: Username should be 3 characters or longer";
      return false;
    } else if ((form.value.username as string).length > 30) {
      this.errorMessage = "Error: Username should be 30 less than characters";
      return false;
    } else if ((form.value.email as string).length < 5) {
      this.errorMessage = "Error: Email should be 5 characters or longer";
      return false;
    } else if ((form.value.email as string).length > 75) {
      this.errorMessage = "Error: Email should be 75 less than characters";
      return false;
    } else if ((form.value.password as string).length < 6) {
      this.errorMessage = "Error: Password should be 6 characters or longer";
      return false;
    } else if ((form.value.password as string).length > 32) {
      this.errorMessage = "Error: Password should be 32 less than characters";
      return false;
    } else {
      return true;
    }
  }

}
