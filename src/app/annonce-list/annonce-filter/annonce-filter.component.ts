import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-annonce-filter',
  templateUrl: './annonce-filter.component.html',
  styleUrls: ['./annonce-filter.component.scss']
})
export class AnnonceFilterComponent implements OnInit {

  formFilter!: FormGroup;

  constructor(fb: FormBuilder) {
    this.formFilter = new FormGroup({
      entites: new FormControl(""),
      typeService: new FormControl(""),
      distance: new FormControl(""),
      date: new FormControl(''),
    });
  }

  ngOnInit(): void {

  }


  sendSearch() {
    console.log(this.formFilter)
  }

}
