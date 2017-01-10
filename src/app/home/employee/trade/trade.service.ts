import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';




@Injectable()
export class TradeService {


  constructor(public http: Http) { }



  getTrade(id){

  }

  createTrade(id){

  }

  updatedTrade(){

  }

  deleteTrade(){

  }

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



}




















// import {Injectable} from '@angular/core';
// import {Http, Headers} from '@angular/http';
//
// @Injectable()
// export class TradeService {
//
//   constructor(public http: Http) { }
//
//   createCustomer(data){
//     let headers = new Headers();
//
//     headers.append('Content-Type', 'application/json');
//
//     return this.http.post('/index/customers', JSON.stringify(data), {headers: headers});
//   }
//
//   searchCustomers(data) {
//     let headers = new Headers();
//
//     headers.append('Content-Type', 'application/json');
//
//     return this.http.get('/index/customers/search', JSON.stringify(data), {headers: headers});
//   }
//
//   checkoutCustomer(id,amount){
//     let headers = new Headers();
//
//     headers.append('Content-Type', 'application/json');
//
//     return this.http.put('/index/customers/checkout/${id}', {total:amount}, {headers: headers});
//   }
//
//   createTradeIn(id) {
//     let headers = new Headers();
//
//     headers.append('Content-Type', 'application/json');
//
//     return this.http.post('/index/trades/${id}', JSON.stringify(data), {headers: headers});
//   }
//
//   addTradeItem(id){
//     let headers = new Headers();
//
//     headers.append('Content-Type', 'application/json');
//
//     return this.http.post('/index/tradeItems/${id}', JSON.stringify(data), {headers: headers});
//   }
//
//   removeTradeItem(id){
//     let headers = new Headers();
//
//     headers.append('Content-Type', 'application/json');
//
//     return this.http.delete('/index/tradeItems/${id}', JSON.stringify(data), {headers: headers});
//   }
//   //past trade look up
//   lookupTrade(id){
//     let headers = new Headers();
//
//     headers.append('Content-Type', 'application/json');
//
//     return this.http.get('/index/trades/${id}', {headers: headers});
//   }
//
//   checkoutTrade(id){
//     let headers = new Headers();
//
//     headers.append('Content-Type', 'application/json');
//
//     return this.http.get('/index/trades/${id}', {headers: headers});
//   }
//
//   customerTradeIn(id,amount){
//     let headers = new Headers();
//
//     headers.append('Content-Type', 'application/json');
//
//     return this.http.put('/index/customers/checkout/${id}', {total:amount}, {headers: headers});
//   }
// }
