import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chanson } from '../model/chanson.model';
import { ChansonService } from '../services/chanson.service';

@Component({
  selector: 'app-add-chanson',
  imports: [FormsModule],
  templateUrl: './add-chanson.component.html',
  styleUrl: './add-chanson.component.css'
})
export class AddChansonComponent {

  newChanson = new Chanson();
  message!: string;

  constructor(private chansonService: ChansonService) {}

  addChanson() {
    this.chansonService.ajouterChanson(this.newChanson);
    this.message = "Chanson " + this.newChanson.titreChanson + " ajoutée avec succès !";
  }

}

