import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


/** @title Form field with error messages */
@Component({
  selector: 'app-annonce-form',
  templateUrl: './annonce-form.component.html',
  styleUrls: ['./annonce-form.component.scss']
})
export class AnnonceFormComponent {
  //email = new FormControl('', [Validators.required, Validators.email]);
  type =  new FormControl('', Validators.required);
  title = new FormControl('', Validators.required);
  localisation = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  img = new FormControl('', Validators.required);

  getErrorMessage() {
   /* if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';*/
  }
}