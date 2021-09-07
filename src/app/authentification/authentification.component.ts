import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthentificationComponent implements OnInit {

  hide = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Veuillez entrer votre email';
    }

    return this.email.hasError('email') ? 'Adresse mail invalide' : '';
  }

  

}
