import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { SignupService } from './signup.service';
import { Router } from '@angular/router'


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ AuthService, SignupService ]
})



export class SignupComponent {
  message: string;

  constructor(public signupService: SignupService, public authService:AuthService, public router:Router) {
    this.message = '';
  }

  signup(firstName:string, lastName:string, email: string, password: string){
    this.message = '';
    this.signupService.signup(firstName,lastName,email, password);
    this.authService.login(email, password);
    this.authService.login(email, password);
    this.router.navigate(['/employee']);
  };
}
