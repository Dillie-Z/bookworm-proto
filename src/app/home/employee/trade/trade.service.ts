import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class TradeService {

  constructor(public http: Http) { }

  createCustomer(data){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post('/index/customers', JSON.stringify(data), {headers: headers});
  }

  searchCustomer(data) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.get('/index/customers/search', JSON.stringify(data), {headers: headers});
  }

  checkoutCustomer(id,amount){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.put('/index/customers/checkout/${id}', {total:amount}, {headers: headers});
  }

  createTradeIn(id) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post('/index/trades/${id}', JSON.stringify(data), {headers: headers});
  }

  addTradeItem(id){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post('/index/tradeItems/${id}', JSON.stringify(data), {headers: headers});
  }

  removeTradeItem(id){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.delete('/index/tradeItems/${id}', JSON.stringify(data), {headers: headers});
  }
  //past trade look up
  lookupTrade(id){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.get('/index/trades/${id}', {headers: headers});
  }

  checkoutTrade(id){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.get('/index/trades/${id}', {headers: headers});
  }

  customerTradeIn(id,amount){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.put('/index/customers/checkout/${id}', {total:amount}, {headers: headers});
  }
}