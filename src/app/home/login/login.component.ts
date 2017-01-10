import { Component } from '@angular/core';
import { AuthService } from './auth.service';
// import { AuthService } from 'angular2-jwt';
import { Router } from '@angular/router'


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthService ]
})



export class LoginComponent {
  message: string;
  firstName: string;
  type: string;

  constructor(public authService: AuthService, public router:Router) {
    this.message = '';
    this.firstName = '';
    this.type = '';
  }

  login(email: string, password: string){
    this.message = '';
    this.authService.login(email, password);
    this.router.navigate(['/employee']);
      // this.message = 'Incorrect credentials.';
      // setTimeout(function() {
      //   this.message = '';
      // }.bind(this), 2500);

    // this.firstName = userData.firstName;
    // this.type = userData.type;
  };

  getUser(){
    var user = this.authService.getUser();
    this.firstName = user.name;
    this.type = user.type;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }



}

























// import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
// import { Router } from '@angular/router';
// // import { FormsModule }   from '@angular/forms';
// import { Observable } from 'rxjs/Rx';
// // import { EmitterService } from '../../emitter.service';
// import { LoginService } from './login.service';
// import { UserModel } from './user.model';
//
//
//
// @Component({
//   selector: 'login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
//   providers: [ LoginService ]
// })
// export class LoginComponent implements OnChanges {
//
//
//   @Input() user: UserModel;
//   @Input() email : string;
//   @Input() password: string;
//   private userId: string;
//   constructor(private loginService: LoginService, public router: Router) { }
//
//   private model = new UserModel('','');
//   private editing = false;
//   loginUser() {
//     let userOperation: Observable<UserModel>;
//     this.model = {
//       email: this.email,
//       password: this.password
//     }
//     if (!this.editing) {
//       userOperation = this.loginService.login(this.model)
//
//       userOperation.subscribe(login => {
//         // EmitterService.get(this.userId).emit(login);
//         this.model = new UserModel('', '');
//         this.editing = false;
//       },
//         err => {
//           console.log(err);
//         });
//     }
//   }
//   ngOnChanges() {
//     // EmitterService.get(this.userId).subscribe((user:UserModel) => {
//     //         this.model = user
//     //         this.editing = true;
//     //     });
//   }
// }
