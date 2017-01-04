import { Component } from '@angular/core';
import { TradeService } from './trade.service'

@Component({
  selector: 'trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent {
  constructor(public tradeService:TradeService){
    tradeService
  }
  this.total = 0;

  newCustomer = {
    firstName:'',
    lastName:'',
    phoneNumber:''
  };

  currentCustomer ={
    id:null,
    firstName:'',
    lastName:'',
    phoneNumber:'',
    accountBalance:0
  };

  currentCustomerId = null;
  searchMsg = '';

  lastName = '';

  public customerList: Array<TradeComponent> = [];
  public tradeItemList: Array<TradeComponent> = [];


  makeCustomer(){
    this.tradeService.createCustomer(this.newCustomer).subscribe((customer)=>{
      this.currentCustomer = customer
    });
  }

  selectCustomer(index){
    this.currentCustomer = customerList[index];
  }

  findCustomers(){
    this.tradeService.searchCustomer(this.lastName).subscribe((list)=>{
      this.customerList = list;
    });
    this.lastName = '';
  }

  newTradeIn(id){
    this.tradeService.createTradeIn(id).subscribe((trade)=>{
      this.currentTradeId = trade.id
    });
  }

  addItem(id){
    this.tradeService.addTradeItem(id).subscribe((item)=>{
      this.tradeItemList.push(item);
    });
    // this.tradeService.
  }

  removeTradeItem(id,index){
    this.tradeService.removeTradeItem(id).subscribe((item)=>{
      // nothing needed here at the moment.
    });
    //splice the trade item list here wiht index
  }

  tradeCheckout(){
    // need to throw in error check to see if there is a current trade or customer
    this.tradeService.checkoutTrade(this.currentTradeId).subscribe((trade)=>{
      this.total = trade.total;
    })
    this.tradeService.checkoutCustomer(this.currentCustomer.id,this.total).subscribe((customer)=>{
      this.currentcustomer = customer;
    })
  }

  tradeIn(){
    // need to throw in error check to see if there is a current trade or customer
    this.tradeService.checkoutTrade(this.currentTradeId).subscribe((trade)=>{
      this.total = trade.total;
    })
    this.tradeService.customerTradeIn(this.currentCustomer.id,this.total).subscribe((customer)=>{
      this.currentcustomer = customer;
    })
  }
}
