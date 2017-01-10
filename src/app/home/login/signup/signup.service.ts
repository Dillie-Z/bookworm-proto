import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';


@Injectable()
export class SignupService {
  constructor(public http: Http) { }

  signup(firstName:string,lastName:string,email:string,password:string){

      this.http.post(`/index/signup`,{firstName:firstName,lastName:lastName,email:email,password:password})
        .subscribe((res: Response) => {
          const data = res.json();
          // this.loading = false;

        });

  }



}
