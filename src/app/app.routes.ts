import { Routes } from '@angular/router';
import { ChansonsComponent } from './chansons/chansons.component';
import { AddChansonComponent } from './add-chanson/add-chanson.component';
import { UpdateChansonComponent } from './update-chanson/update-chanson.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { chansonGuard } from './chanson.guard';


export const routes: Routes = [
  { path: "chansons", component: ChansonsComponent },
       

 {path: "updateChanson/:id", component: UpdateChansonComponent},
 { path: 'recherche-par-categorie', component: RechercheParCategorieComponent },
 {path: "rechercheParTitre", component : RechercheParTitreComponent},
 {path: "listeCategories", component : ListeCategoriesComponent},
 {path: 'login', component: LoginComponent},
 {path: 'app-forbidden', component: ForbiddenComponent},
 {path: "add-chanson", component : AddChansonComponent, canActivate:[chansonGuard]}, 
  {path: "", redirectTo: "chansons", pathMatch: "full"}
];
