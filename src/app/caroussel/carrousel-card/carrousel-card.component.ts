import { Component, Input, OnInit } from '@angular/core';
import { Annonce } from 'src/app/shared/models/annonce';

@Component({
  selector: 'app-carrousel-card',
  templateUrl: './carrousel-card.component.html',
  styleUrls: ['./carrousel-card.component.scss']
})
export class CarrouselCardComponent implements OnInit {

  @Input() annonce! : Annonce;
  constructor() { }

  ngOnInit(): void {
  }

}
