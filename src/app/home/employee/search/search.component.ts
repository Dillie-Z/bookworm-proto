import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SearchService } from './search.service'

import { Book } from '../model/book';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SearchService ]
})
export class SearchComponent implements OnInit {

  bookAuthorList: Book[];

  bookTitleList: Book[];

  constructor(public searchService:SearchService, public book:Book ){
    this.bookAuthorList = [];
    this.bookTitleList = [];
  }

  ngOnInit(){}

  searchByAuthor(author:string){
    this.bookAuthorList = this.searchService.searchByAuthor(author)
  }

  searchBytitle(title:string){
    this.bookTitleList = this.searchService.searchByTitle(title)
  }

}
