import { Component, OnInit } from '@angular/core';
import { Chanson } from '../model/chanson.model';
import { ActivatedRoute, Router } from '@angular/router'; // Ajout de Router
import { ChansonService } from '../services/chanson.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-chanson',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-chanson.component.html',
  styles: []
})
export class UpdateChansonComponent implements OnInit {
  currentChanson = new Chanson(); // Chanson à modifier

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, // Ajout de Router
    private chansonService: ChansonService
  ) {}

  ngOnInit() {
    // Récupération de l'ID depuis les paramètres de l'URL
    const chansonId = this.activatedRoute.snapshot.params['id'];
    
    // Recherche de la chanson par ID
    this.currentChanson = this.chansonService.consulterChanson(chansonId);
    
    console.log(this.currentChanson);
  }

  // Méthode pour mettre à jour la chanson
  updateChanson() {
    // Mise à jour de la chanson via le service
    this.chansonService.updateChanson(this.currentChanson);
    
    // Redirection vers la liste des chansons après la mise à jour
    this.router.navigate(['chansons']);
  }
}
