import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chanson } from '../model/chanson.model'; // Remplacez `Produit` par `Chanson`
import { ChansonService } from '../services/chanson.service'; // Remplacez `ProduitService` par `ChansonService`
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-titre',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchFilterPipe],
  templateUrl: './recherche-par-titre.component.html',
  styles: ``
})
export class RechercheParTitreComponent implements OnInit {

  titreChanson!: string; // Remplacez `nomProduit` par `titreChanson`
  chansons!: Chanson[]; // Remplacez `produits` par `chansons`
  searchTerm!: string;

  constructor(private chansonService: ChansonService) { }

  ngOnInit(): void {
    // Récupérer toutes les chansons lors de l'initialisation du composant
    this.chansonService.listeChansons().subscribe(chansons => {
      console.log(chansons); // Affiche les chansons récupérées pour debug
      this.chansons = chansons; // Assigner les chansons à la variable
    });
  }

  rechercherChansons(): void {
    if (this.titreChanson) {
      // Si un titre est spécifié, rechercher les chansons par ce titre
      this.chansonService
        .rechercherParTitre(this.titreChanson)
        .subscribe((chansons) => {
          console.log(chansons);
          this.chansons = chansons;
        });
    } else {
      // Si aucun titre n'est spécifié, récupérer toutes les chansons
      this.chansonService.listeChansons().subscribe((chansons) => {
        console.log(chansons);
        this.chansons = chansons;
      });
    }
  }
}
