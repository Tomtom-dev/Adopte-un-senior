import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-filter',
  templateUrl: './option-filter.component.html',
  styleUrls: ['./option-filter.component.scss']
})
export class OptionFilterComponent implements OnInit {

  @Input() entite: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.entite.myValue)
    console.log(this.entite.name)
  }

}
