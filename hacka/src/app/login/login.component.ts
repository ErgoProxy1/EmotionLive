import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  errorMessage = '';
  successMessage = '';


  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(75)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(32)])
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.successMessage = '';
    this.errorMessage = '';
  }

  tryLogin(form: FormGroup) {
    this.auth.doLogin(form.value.email, form.value.password).then(res => {
      this.successMessage = "Logged in";
      this.router.navigateByUrl('/home');
    }, err => {
      this.errorMessage = err;
    })
  }

}
