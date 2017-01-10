import { Component, OnInit, Input, OnChanges } from '@angular/core';
// import { ScanService } from './scan/scan.service';
// import { TradeService } from './trade/trade.service';
// import { CheckoutService } from './checkout/checkout.service';
// import { SearchComponent } from './search/search.component';
// import { ScannerComponent } from './scanner/scanner.component';
//


@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  currentScannnerAction:boolean;
  currentSearchAction:boolean;

  constructor(currentScannnerAction:boolean,currentSearchAction:boolean){
    this.currentScannnerAction = false;
    this.currentSearchAction = false;
  }

  setActionScanner(){
    if(this.currentScannnerAction === false){
      this.currentScannnerAction = true
    } else {
      this.currentScannnerAction = false
    }
  }

  setActionSearch(){
    if(this.currentScannnerAction === false){
      this.currentSearchAction = true
    } else {
      this.currentSearchAction = false
    }
  }
}
