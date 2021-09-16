import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from '../validation';

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
      nom: new FormControl("",  [Validators.minLength(3),Validators.required]),
      prenom: new FormControl("", [Validators.minLength(3),Validators.required]),
      mail: new FormControl("",[Validators.email, Validators.required]),
      mdp: new FormControl("", [
        Validators.required,
        Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&]).{8,30})')]),
      confMdp: new FormControl("", Validators.required)
    }, {
      validators: [Validation.match('mdp','confMdp')]
    })
   }

  ngOnInit(): void {
  }

  getErrorMessageType(){
    if(this.authForm.controls.type.value === ""){
      return "Veuillez précisez qui vous êtes"
    }
    return ""
  }

  getErrorMessageNom(){
    if(this.authForm.controls.nom.status === "INVALID"){
      return "le nom doit avoir 3 lettres minimum"
    }
    return ""
  }

  getErrorMessagePrenom(){
    if(this.authForm.controls.prenom.status === "INVALID"){
      return "le prenom doit avoir 3 lettres minimum"
    }
    return ""
  }

  getErrorMessageEmail(){
    if(this.authForm.controls.mail.status === "INVALID"){
      return "Veuillez entrer une adresse mail valide"
    }
    return ""
  }

  subscribe(){
    console.log(this.authForm);
    
  }
}
