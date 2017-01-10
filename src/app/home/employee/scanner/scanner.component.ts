import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { isbn } from '../model/isbn';
import { ScannerService } from './scanner.service';
import { Book } from '../model/book';


@Component({
  selector: 'scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
  providers: [ ScannerService ]
})
export class ScannerComponent implements OnInit{
  isbnList: isbn[];

  constructor(public scannerService:ScannerService,public book:Book, public isbns:isbn ){
    this.book = book;
    this.isbnList = [];
  }
  ngOnInit(){}

  getScannedIsbns(){
    this.isbnList = this.scannerService.getScannedISBNs()
  }

  deleteIsbn(isbn:string){
    this.scannerService.deleteISBN(isbn)
  }

  deleteIsbns(){
    this.scannerService.deleteISBNs()
  }

  getBookInfo(isbn:string){
    this.scannerService.getBookInfo(isbn)
  }

  createBook(isbn:string,storePrice:number,tradeInPrice:number){
    this.book = this.scannerService.getBookInfo(isbn)

    this.scannerService.createBook(this.book.title,this.book.subtitle,this.book.author,this.book.publisher,this.book.publishedDate,this.book.description,this.book.retailPrice,storePrice,tradeInPrice,this.book.genre,isbn)
  }

  addBookToQuantity(isbn:string){
    this.scannerService.updateQuantity(isbn)
  }


}
