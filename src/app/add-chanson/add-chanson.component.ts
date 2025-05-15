import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chanson } from '../model/chanson.model';
import { Categorie } from '../model/categorie.model';
import { ChansonService } from '../services/chanson.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-chanson',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-chanson.component.html'
})
export class AddChansonComponent implements OnInit {

  newChanson = new Chanson();
  categories!: Categorie[];
  newIdCat!: number;

  constructor(
    private chansonService: ChansonService,
    private router: Router
  ) {}

   ngOnInit(): void {
    this.chansonService.listeCategories().
          subscribe(cats => {console.log(cats);
                             this.categories = cats._embedded.categories;
                             }
        );
  }

  addChanson() {
    this.newChanson.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
    this.chansonService.ajouterChanson(this.newChanson).subscribe(cha => {
      console.log(cha);
      this.router.navigate(['chansons']);
    });
  }
}
