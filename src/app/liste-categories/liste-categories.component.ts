import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { ChansonService } from '../services/chanson.service';
import { CommonModule } from '@angular/common';
import { UpdateCategorieComponent } from '../update-categorie/update-categorie.component';

@Component({
  selector: 'app-liste-categories',
  standalone: true,
  imports: [CommonModule, UpdateCategorieComponent],
  templateUrl: './liste-categories.component.html',
  styles: []
})
export class ListeCategoriesComponent implements OnInit {
  categories!: Categorie[];
  updatedCat: Categorie = { "idCat": 0, "nomCat": "" };

  ajout: boolean = true;

  constructor(private chansonService: ChansonService) { }

  ngOnInit(): void {
    this.chansonService.listeCategories().subscribe(cats => {
      this.categories = cats._embedded.categories;
      console.log(cats);
    });
  }

  categorieUpdated(cat: Categorie) {
    console.log("Cat updated event", cat);
    this.chansonService.ajouterCategorie(cat).subscribe(() => this.chargerCategories());
  }

  chargerCategories() {
    this.chansonService.listeCategories().subscribe(cats => {
      this.categories = cats._embedded.categories;
      console.log(cats);
    });
  }

  updateCat(cat: Categorie) {
    this.updatedCat = cat;
    this.ajout = false;
  }
}
