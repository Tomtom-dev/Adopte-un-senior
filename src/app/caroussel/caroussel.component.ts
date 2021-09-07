import { Component, OnInit } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import { Annonce } from '../shared/models/annonce';
import {AnnonceService} from '../shared/service/annonce.service'

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})
export class CarousselComponent implements OnInit {

  annonces: Annonce[] = [];

  constructor(private annonceService: AnnonceService  ) { }

  ngOnInit(): void {
    this.annonceService.getPosts().subscribe((annonce : Annonce[]) =>{
      this.annonces= annonce;
      console.log(annonce);
    })
  }
}
