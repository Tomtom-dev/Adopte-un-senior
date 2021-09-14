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
    this.annonceService.getPosts().subscribe((annonce: Annonce[]) => {
      let filter1 = annonce.filter(ann => ann.type === filter[0])      
      let filter2 = filter1.filter(ann => ann.typeService === filter[1])
      let filter3 = filter2.filter(ann => ann.localisation === filter[2])
      let filter4 = filter3.filter(ann => ann.date === new Date(filter[3]))
      
      this.annonces = filter2;
    })   
  }

}
