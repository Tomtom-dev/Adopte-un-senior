import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-annonce-filter',
  templateUrl: './annonce-filter.component.html',
  styleUrls: ['./annonce-filter.component.scss']
})
export class AnnonceFilterComponent implements OnInit {

  entites = [
    { id: 1, myValue: "", name: "Entités" },
    { id: 2, myValue: "association", name: "Association" },
    { id: 3, myValue: "personne", name: "Personnes Âgées" },
    { id: 4, myValue: "autre", name: "Autre" }
  ]
  selectedValue =null;

  
  form = new FormGroup({
    valueEntite: new FormControl("")
  })

  constructor() { }

  ngOnInit(): void {
  }

  //Sur le btn search
  formFilter(){
    console.log(this.form)
  }

}
