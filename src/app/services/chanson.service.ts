import { Injectable } from '@angular/core';
import { Chanson } from '../model/chanson.model';

@Injectable({
  providedIn: 'root'
})
export class ChansonService {
  chansons: Chanson[]; // tableau de chansons
chanson!: Chanson;
  constructor() {console.log("Création du premier Chanson!")
    this.chansons = [
       { idChanson: 1, titreChanson: "Die with a smile", type: "pop", dateSortie: new Date("01/15/2024") },
      { idChanson: 2, titreChanson: "Hello", type: "pop", dateSortie: new Date("01/15/2017") },
      { idChanson: 3, titreChanson: "Doctor", type: "pop", dateSortie: new Date("01/15/2025") }
    ];
  }

  listeChansons(): Chanson[] {
    return this.chansons;
  }

  ajouterChanson(chanson: Chanson) {
    this.chansons.push(chanson);
  }
 supprimerChanson( chan: Chanson){
       
       const index = this.chansons.indexOf(chan, 0);
       if (index > -1) {
         this.chansons.splice(index, 1);
       }}
  consulterChanson(id: number): Chanson {    
  this.chanson = this.chansons.find(c => c.idChanson === id)!;
  return this.chanson;
}
updateChanson(chanson: Chanson) {
  // Chercher la chanson dans le tableau
  const index = this.chansons.indexOf(chanson, 0);
  
  // Si la chanson existe dans le tableau
  if (index > -1) {
    // Supprimer l'ancienne chanson
    this.chansons.splice(index, 1);

    // Ajouter la chanson mise à jour à sa place
    this.chansons.splice(index, 0, chanson);
  }
}


}
