import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthentificationComponent implements OnInit {

  hide = true;
  authForm: FormGroup;

  constructor() {
    this.authForm = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {
  }

  // email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.authForm.controls.email.hasError('required')) {
      return 'Veuillez entrer votre email';
    }

    return this.authForm.controls.email.hasError('email') ? 'Adresse mail invalide' : '';
  }

  login(){
    console.log(this.authForm)
  }

}
