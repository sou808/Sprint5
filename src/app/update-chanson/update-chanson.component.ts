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
    this.chansonService.listeCategories().subscribe((cats) => {
      this.categories = cats;
    });

    this.chansonService
      .consulterChanson(this.activatedRoute.snapshot.params['id'])
      .subscribe((ch) => {
        this.currentChanson = ch;
        this.updatedCatId = this.currentChanson.categorie.idCat;
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
