import { Injectable } from '@angular/core';
import { Chanson } from '../model/chanson.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config'; // Assurez-vous que le chemin est correct
import { CategorieWrapper } from '../model/cateorieWrapped.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class ChansonService {
  chansons!: Chanson[];
  categories!: Categorie[];
  apiURLCat: string = 'http://localhost:9093/chansons/cat'; // URL des catégories

  constructor(private http: HttpClient) {}

  // Liste des chansons
  listeChansons(): Observable<Chanson[]> {
    return this.http.get<Chanson[]>(apiURL);
  }

  // Ajouter une chanson
  ajouterChanson(ch: Chanson): Observable<Chanson> {
    return this.http.post<Chanson>(apiURL, ch, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // Supprimer une chanson par ID
  supprimerChanson(idChanson: number): Observable<void> {
    const url = `${apiURL}/${idChanson}`;
    return this.http.delete<void>(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // Consulter une chanson par ID
  consulterChanson(idChanson: number): Observable<Chanson> {
    const url = `${apiURL}/${idChanson}`;
    return this.http.get<Chanson>(url);
  }

  // Liste des catégories
  listeCategories(): Observable<CategorieWrapper> {
    return this.http.get<CategorieWrapper>(this.apiURLCat);
  }

  // Consulter une catégorie par ID (dans le tableau de catégories locales)
  consulterCategorie(idCat: number): Categorie | undefined {
    return this.categories?.find((cat) => cat.idCat === idCat);
  }

  // Mise à jour d'une chanson
  updateChanson(ch: Chanson): Observable<Chanson> {
    const url = `${apiURL}/${ch.idChanson}`;
    return this.http.put<Chanson>(url, ch, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // Recherche des chansons par catégorie
  rechercherParCategorie(idCat: number): Observable<Chanson[]> {
    const url = `${apiURL}/chansonscat/${idCat}`;
    return this.http.get<Chanson[]>(url);
  }

  rechercherParTitre(titre: string): Observable<Chanson[]> {
    const url = `${apiURL}/chansonsByTitre/${titre}`;
    return this.http.get<Chanson[]>(url);
  }

  // Ajouter une catégorie
  ajouterCategorie(cat: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.apiURLCat, cat, httpOptions);
  }
}
