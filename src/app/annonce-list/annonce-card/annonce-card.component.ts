import { Component, Input, OnInit } from '@angular/core';
import { Annonce } from 'src/app/shared/models/annonce';

@Component({
  selector: 'app-annonce-card',
  templateUrl: './annonce-card.component.html',
  styleUrls: ['./annonce-card.component.scss']
})
export class AnnonceCardComponent implements OnInit {

  @Input() annonce!: Annonce;

  constructor() { }

  ngOnInit(): void {
  }

}
