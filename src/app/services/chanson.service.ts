import { Injectable } from '@angular/core';
import { Chanson } from '../model/chanson.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'; // ✅ correct

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root',
})
export class ChansonService {
  chansons!: Chanson[]; // tableau de Chanson
  chanson!: Chanson;
  categories!: Categorie[];

  constructor(private http: HttpClient) {}

  listeChansons(): Observable<Chanson[]> {
    return this.http.get<Chanson[]>(environment.apiURL);
  }

  ajouterChanson(ch: Chanson): Observable<Chanson> {
    return this.http.post<Chanson>(environment.apiURL, ch, httpOptions);
  }

  supprimerChanson(id: number) {
    const url = `${environment.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterChanson(id: number): Observable<Chanson> {
    const url = `${environment.apiURL}/${id}`;
    return this.http.get<Chanson>(url);
  }

  listeCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(environment.apiURL + '/cat');
  }

  consulterCategorie(id: number): Categorie {
    return this.categories.find((cat) => cat.idCat == id)!;
  }

  updateChanson(ch: Chanson): Observable<Chanson> {
    return this.http.put<Chanson>(environment.apiURL, ch, httpOptions);
  }
}
