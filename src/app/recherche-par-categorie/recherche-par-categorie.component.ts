import { Component, OnInit } from '@angular/core';
import { Chanson } from '../model/chanson.model';  // Remplacer Produit par Chanson
import { Categorie } from '../model/categorie.model';
import { ChansonService } from '../services/chanson.service';  // Remplacer ProduitService par ChansonService
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recherche-par-categorie',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-categorie.component.html',
  styles: ``,
})
export class RechercheParCategorieComponent implements OnInit {
  chansons!: Chanson[];  // Remplacer produits par chansons
  IdCategorie!: number;
  categories!: Categorie[];

  constructor(private chansonService: ChansonService) {}  // Remplacer produitService par chansonService

  ngOnInit(): void {
    this.chansonService.listeCategories().subscribe((cats) => {
      this.categories = cats._embedded.categories;
      console.log(cats);
    });
  }

  onChange() {
    this.chansonService.rechercherParCategorie(this.IdCategorie).
    subscribe((chans) => {this.chansons = chans;  // Remplacer produits par chansons
    });
  }
}
