import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
// import { CheckoutComponent } from './checkout/checkout.component';
import { EmployeeComponent } from './employee.component';
import { ScanComponent } from './scan/scan.component';
// import { ScannerComponent } from './scanner.component'
import { TradeComponent } from './trade/trade.component';
// import { ShiftComponent } from './shift/shift.component'

export const MODULE_ROUTES: Route[] = [
  { path: 'employee', pathMatch: 'full' , component: EmployeeComponent }
]

export const MODULE_COMPONENTS = [

]
