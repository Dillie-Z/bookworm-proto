import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
// import { JwtHelper } from 'angular2-jwt';
@Injectable()
export class AuthService {
  constructor(public http: Http) { }

  // this.jwtHelper = new JwtHelper()
  login(email: string, password: string){


    // let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(
      '/index/login',
      {
        email: email,
        password: password
      })
      .subscribe((res: Response) => {
        const data = res.json();
        // this.loading = false;
        console.log('data' + data.success)

          localStorage.setItem('token', data.token);
          localStorage.setItem('name', data.firstName);
          localStorage.setItem('type', data.type);

      });
    }


    logout(): any {
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('type');
    }

    getUser(): any {
      const name = localStorage.getItem('name');
      const type = localStorage.getItem('type');
      return {name:name,type:type}
    }

    isLoggedIn(): boolean {
      return this.getUser() !== null;
    }
}

export var AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];

























// import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
// // import { Comment } from '../model/comment';
// import { Observable } from 'rxjs/Rx';
// import { UserModel } from './user.model';
// // import { path} from
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
//
// @Injectable()
// export class LoginService {
//
//   constructor(public http: Http) { }
//   private loginUrl = './index/users/login';
//
//   login(body:Object): Observable<UserModel> {
//     let bodyString = JSON.stringify(body);
//     let headers      = new Headers({ 'Content-Type': 'application/json' });
//     let options       = new RequestOptions({ headers: headers });
//
//     return this.http.post('/index/login',body, options)
//                     .map((res:Response) => res.json())
//                     .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
//   }
// }
