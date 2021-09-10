import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class InscriptionComponent implements OnInit {

  
  authForm: FormGroup;

  constructor() {
    this.authForm = new FormGroup({
      nom: new FormControl("", [Validators.email, Validators.required]),
      prenom: new FormControl("", Validators.required),
      mail: new FormControl("", Validators.required),
      mdp: new FormControl("", Validators.required),
      confMdp: new FormControl("", Validators.required)
    })
   }

  ngOnInit(): void {
  }

  subscribe(){
    console.log(this.authForm.value);
    
  }
}
