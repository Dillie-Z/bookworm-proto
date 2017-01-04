import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Http } from '@angular/http';
import { LoginService } from './login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userData = {
    firstName:'',
    lastName:'',
    passord:'',
    email:''
  }
  constructor(public loginService:LoginService, public router: Router){
    loginService
  }

  login(){
    this.loginService.login(this.userData)
    .subscribe((res) => {
        // Reset `summoner` input
        this.userData = {
          firstName:'',
          lastName:'',
          passord:'',
          email:''
        };
        this.router.navigateByUrl('/employee')
    });
  }
}
