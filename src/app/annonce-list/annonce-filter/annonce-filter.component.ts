import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AnnonceService } from 'src/app/shared/service/annonce.service';

@Component({
  selector: 'app-annonce-filter',
  templateUrl: './annonce-filter.component.html',
  styleUrls: ['./annonce-filter.component.scss']
})
export class AnnonceFilterComponent implements OnInit {

  formFilter: FormGroup;

  constructor(fb: FormBuilder, private service: AnnonceService) {
    this.formFilter = new FormGroup({
      entites: new FormControl(""),
      typeService: new FormControl(""),
      distance: new FormControl(""),
      date: new FormControl(''),
    });
  }

  ngOnInit(): void {

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
      this.formFilter.value.distance,
      this.formFilter.value.date
    ]
    this.sendFilter.emit(this.data);
  }

}
