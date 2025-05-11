import { Routes } from '@angular/router';
import { ChansonsComponent } from './chansons/chansons.component';
import { AddChansonComponent } from './add-chanson/add-chanson.component';
import { UpdateChansonComponent } from './update-chanson/update-chanson.component';
export const routes: Routes = [
  { path: "chansons", component: ChansonsComponent },
  { path: "add-chanson", component: AddChansonComponent },
 {path: "updateChanson/:id", component: UpdateChansonComponent},
  {path: "", redirectTo: "chansons", pathMatch: "full"}
];
