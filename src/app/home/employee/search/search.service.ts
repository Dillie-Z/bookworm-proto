import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';


@Injectable()
export class SearchService {
  constructor(public http: Http) { }

  searchByTitle(title:string):any{
    this.http.get(`/index/books/title/${title}`)
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

  searchByAuthor(author:string):any{
    this.http.get(`/index/books/author/${author}`)
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



}
