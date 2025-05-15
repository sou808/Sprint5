import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chanson } from '../model/chanson.model';
import { ChansonService } from '../services/chanson.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-chansons',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './chansons.component.html',
  styleUrl: './chansons.component.css'
})
export class ChansonsComponent implements OnInit {
  chansons!: Chanson[];

  constructor(private chansonService : ChansonService,
public authService: AuthService) { }

  ngOnInit() {
    this.chargerChansons();
  }

  chargerChansons() {
    this.chansonService.listeChansons().subscribe((chansons) => {
      console.log(chansons);
      this.chansons = chansons;
    });
  }

  supprimerChanson(chanson: Chanson) {
    let conf = confirm("Êtes-vous sûr de vouloir supprimer cette chanson ?");
    if (conf && chanson.idChanson) {
      this.chansonService.supprimerChanson(chanson.idChanson).subscribe(() => {
        console.log("chanson supprimée");
        this.chargerChansons();
      });
    }
  }

  trackById(index: number, chanson: Chanson): number {
    return chanson.idChanson!;
  }
}




