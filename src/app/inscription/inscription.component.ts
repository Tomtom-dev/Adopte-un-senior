import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Choice {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class InscriptionComponent implements OnInit {

  choices : Choice[]=[
    {value:"association", viewValue:"Une association"},
    {value:"benevole", viewValue:"Un bénévole"},
    {value:"senior", viewValue:"Une personne agée"}
  ]
  
  authForm: FormGroup;

  constructor() {
    this.authForm = new FormGroup({
      type: new FormControl("", Validators.required),
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
