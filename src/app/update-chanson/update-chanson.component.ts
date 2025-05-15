import { Component, OnInit } from '@angular/core';
import { Chanson } from '../model/chanson.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ChansonService } from '../services/chanson.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-chanson',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-chanson.component.html',
  styles: ``,
})
export class UpdateChansonComponent implements OnInit {
  currentChanson: Chanson = {
    titreChanson: '',
    type: '',
    dateSortie: new Date(),
    categorie: {} as Categorie,
  };

  categories!: Categorie[];
  updatedCatId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private chansonService: ChansonService
  ) {}
 ngOnInit(): void {
  // Fetch categories for songs (replace with your service method for categories, if applicable)
  this.chansonService.listeCategories().subscribe(cats => {
    console.log(cats);
    this.categories = cats._embedded.categories; // Adjust according to the structure of your data
  });

  // Fetch the song using the ID from the route
  this.chansonService.consulterChanson(this.activatedRoute.snapshot.params['idChanson']).subscribe(prod => {
    this.currentChanson = prod; // Assuming your song object is assigned to currentChanson
    this.updatedCatId = this.currentChanson.categorie.idCat!; // Assuming `categorie` has a `idCat` property
  });
}

  updateChanson() {
    this.currentChanson.categorie = this.categories.find(
      (cat) => cat.idCat == this.updatedCatId
    )!;
    this.chansonService.updateChanson(this.currentChanson).subscribe(() => {
      this.router.navigate(['chansons']);
    });
  }
}
