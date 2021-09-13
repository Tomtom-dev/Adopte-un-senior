import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Annonce } from '../models/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${environment.url}/annonce/`);
  }

  public addAnnonce(annonce: Annonce): Observable<Annonce> {
    return this.http.post<Annonce>(`${environment.url}/annonce/`, annonce);
  }

}
