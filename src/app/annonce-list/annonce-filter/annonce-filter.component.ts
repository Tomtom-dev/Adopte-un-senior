import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Annonce } from 'src/app/shared/models/annonce';
import { AnnonceService } from 'src/app/shared/service/annonce.service';

@Component({
  selector: 'app-annonce-filter',
  templateUrl: './annonce-filter.component.html',
  styleUrls: ['./annonce-filter.component.scss']
})
export class AnnonceFilterComponent implements OnInit {

  formFilter: FormGroup;
  localisationList= new Array();

  constructor(fb: FormBuilder, private service: AnnonceService) {
    this.formFilter = new FormGroup({
      entites: new FormControl(""),
      typeService: new FormControl(""),
      localisation: new FormControl(""),
      date: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.service.getPosts().subscribe((annonces: Annonce[]) => {
      annonces.forEach(annonce => this.localisationList.push(annonce.localisation));
    })       
  }

  @Output() sendFilter: EventEmitter<any> = new EventEmitter();


  data!: any;

  /**
   * Fonction qui permet d'envoyer les options choisies dans les 
   * filtres au parent
   */
  sendSearch() {    
    this.data = [
      this.formFilter.value.entites,
      this.formFilter.value.typeService,
      this.formFilter.value.localisation,
      this.formFilter.value.date
    ]
    this.sendFilter.emit(this.data);
  }

}
