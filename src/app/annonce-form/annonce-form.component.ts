import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Annonce } from '../shared/models/annonce';
import { AnnonceService } from '../shared/service/annonce.service';


/** @title Form field with error messages */
@Component({
  selector: 'app-annonce-form',
  templateUrl: './annonce-form.component.html',
  styleUrls: ['./annonce-form.component.scss'], encapsulation: ViewEncapsulation.None
})
export class AnnonceFormComponent {

  annonceForm: FormGroup;

  constructor(private annonceService: AnnonceService) {
    this.annonceForm = new FormGroup({
      //email = new FormControl('', [Validators.required, Validators.email]);
      type: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      localisation: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      //img: new FormControl('', Validators.required)
    });
  }
  addAnnonce(){
    if(this.annonceForm.status === "VALID"){
      this.annonceService.addAnnonce(this.annonceForm.value).subscribe((newAnnonce:Annonce)=>{
        console.log(newAnnonce);
        this.annonceForm.reset();
      });
    }
    console.log(this.annonceForm);
  }
  
  getErrorMessage() {
    /* if (this.email.hasError('required')) {
       return 'You must enter a value';
     }
 
     return this.email.hasError('email') ? 'Not a valid email' : '';*/
  }
}