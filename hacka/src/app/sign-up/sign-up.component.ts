import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  successMessage: String;
  errorMessage: String;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(75), Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(32)])
    })
  }

  tryRegister(form: FormGroup) {
    this.auth.doRegister(form.value.username, form.value.email, form.value.password)
      .then(res => {
        console.log(res);
        console.log(this.auth.username)
        this.successMessage = "Your account has been created";
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })
  }

}
