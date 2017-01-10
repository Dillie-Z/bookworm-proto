import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';


@Injectable()
export class ScannerService {
  constructor(public http: Http) { }

  // this.jwtHelper = new JwtHelper()
  getScannedISBNs(): any {


    // let bodyString = JSON.stringify(body);
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    this.http.get('/index/isbns')
      .subscribe((res: Response) => {
        const data = res.json();
        // this.loading = false;

        const results = [];

        data.forEach(isbn => {
          results.push(isbn)
        })
        return results
      });
  }


  checkISBN(isbn: string): any {
    this.http.get(`/index/isbns/${isbn}`)
      .subscribe((res: Response) => {
        const data = res.json();
        // this.loading = false;
        return data
      });
  }

  deleteISBN(isbn: string): any {
    this.http.delete(`/index/isbns/${isbn}`)
      .subscribe((res: Response) => {
        const data = res.json();

      });
  }

  deleteISBNs(): any {
    this.http.delete(`/index/isbns`)
      .subscribe((res: Response) => {
        const data = res.json();

      });
  }

  getBookInfo(isbn: string):any {
    this.http.get(`/index/books/info/${isbn}`)
      .subscribe((res: Response) => {
        const data = res.json();
        return data
      });
  }

  getBook(isbn: string):any {
    this.http.get(`/index/books/${isbn}`)
      .subscribe((res: Response) => {
        const data = res.json();
        return data
      });
  }

  createBook(title: string, subtitle: string, author: string, publisher: string, publishedDate: string, description: string, retailPrice: number, storePrice:number, tradePrice:number, genre: string,scannedISBN:string):any {



    this.http.post(`/index/books`,{title:title,subtitle:subtitle,author:author,publisher:publisher,publishedDate:publishedDate,description:description,retailPrice:retailPrice,storePrice:storePrice,tradePrice:tradePrice,genre:genre,scannedISBN:scannedISBN})
      .subscribe((res: Response) => {
        const data = res.json();
      });
  }

  updateQuantity(isbn: string) {
    this.http.get(`/index/books/${isbn}`)
      .subscribe((res: Response) => {
        const data = res.json();
      });
  }

}
