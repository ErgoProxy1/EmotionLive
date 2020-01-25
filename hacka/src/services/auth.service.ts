import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: string;
  errorMessage: string;

  constructor(public fbAuth: AngularFireAuth) {

  }

  doRegister(username: string, email: string, password: string) {
    this.username = username;
    return new Promise<firebase.auth.UserCredential>((resolve, reject) => {
      this.fbAuth.auth.createUserWithEmailAndPassword(email, password).then((signin) => {
        this.updateUsername().then(()=>{
          resolve(signin);
        }).catch((username_error)=>{
          reject(username_error)
        })
      }).catch((signin_error) => {
        reject(signin_error)
      });
    })
  }

  updateUsername() {
    return new Promise<String>((resolve, reject) => {
      this.fbAuth.auth.onAuthStateChanged((user) => {
        if (user) {
          user.updateProfile({
            displayName: this.username
          }).then(() => {
            this.username = user.displayName;
            resolve("")
          }).catch((err) => {
            reject(err)
          })
        }
      })
    })
  }

  doLogin(email: string, password: string) {
    return new Promise<firebase.auth.UserCredential>((resolve, reject) => {
      this.fbAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
        resolve(res);
      }, err => reject(err));
    })
  }
}
