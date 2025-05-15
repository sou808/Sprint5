import { Component } from '@angular/core';
import { User } from '../model/User.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  erreur=0;

user = new User();
constructor(private authService : AuthService,
private router: Router) { }
onLoggedin(){
console.log(this.user);
 let isValidUser: Boolean = this.authService.SignIn(this.user);
if (isValidUser)
this.router.navigate(['/']);
else
//alert('Login ou mot de passe incorrecte!');
this.erreur = 1;
}}

