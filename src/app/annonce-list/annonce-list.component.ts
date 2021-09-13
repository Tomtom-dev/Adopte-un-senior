import { Component, Input, OnInit } from '@angular/core';
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
    })    
  }

  /**
   * Fonction qui récupère les filtres choisis pour renvoyer 
   * les annonces en conséquence
   * @param filter string qui récupère les filtres
   */
  updateFilter(filter: string): void{
    console.log(filter);
    //Nouvelle liste selon les filtres !!!!!!!!
  }

}
