import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private auth: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(75)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(32)])
    });
  }

  ngOnInit() {
  }

  tryLogin(form: FormGroup) {
    this.auth.doLogin(form.value.email, form.value.password).then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

}
