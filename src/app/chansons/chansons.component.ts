import { Component, OnInit } from '@angular/core';
import { Chanson } from '../model/chanson.model';
import { ChansonService } from '../services/chanson.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-chansons',
  standalone:true,
  imports:[CommonModule,RouterLink],
  templateUrl: './chansons.component.html'
})
export class ChansonsComponent implements OnInit {
  chansons!: Chanson[] ;

  constructor(private chansonService: ChansonService) {this.chansons = chansonService.listeChansons();}
ngOnInit(): void {
  
}

  supprimerChanson(c: Chanson)
{
  let conf = confirm("Etes-vous sûr ?");
     if (conf)
       this.chansonService.supprimerChanson(c);
}
}
