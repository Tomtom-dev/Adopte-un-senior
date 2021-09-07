import { Component, OnInit } from '@angular/core';
import { Annonce } from '../shared/models/annonce';
import { AnnonceService } from '../shared/service/annonce.service';

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.scss']
})
export class AnnonceListComponent implements OnInit {

  annonces: Annonce[] = [];

  constructor(private annonceService: AnnonceService) {
   }

  ngOnInit(): void {
    this.annonceService.getPosts().subscribe((annonce: Annonce[]) => {
      this.annonces = annonce;
      console.log(annonce)
    })
  }

}
