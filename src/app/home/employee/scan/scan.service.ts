import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';


@Injectable()
export class ScanService {
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
