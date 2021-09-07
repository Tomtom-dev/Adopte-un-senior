import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


/** @title Form field with error messages */
@Component({
  selector: 'app-annonce-form',
  templateUrl: './annonce-form.component.html',
  styleUrls: ['./annonce-form.component.scss'], encapsulation: ViewEncapsulation.None
})
export class AnnonceFormComponent {

  annonceForm: FormGroup;

  constructor() {
    this.annonceForm = new FormGroup({
      //email = new FormControl('', [Validators.required, Validators.email]);
      type: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      localisation: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required)
    });
  }
  addAnnonce(){
    console.log("ok")
  }
  getErrorMessage() {
    /* if (this.email.hasError('required')) {
       return 'You must enter a value';
     }
 
     return this.email.hasError('email') ? 'Not a valid email' : '';*/
  }
}