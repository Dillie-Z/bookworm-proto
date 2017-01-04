import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { ScanComponent } from './scan.component';
import { TradeComponent } from './trade.component';
import { ShiftComponent } from './shift.component'

export const MODULE_ROUTES: Route[] = [
  { path: 'employee', pathMatch: 'full' , component: EmployeeComponent },
  { path: 'trade', component: TradeComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'shift', component: ShiftComponent}

]

export const MODULE_COMPONENTS = [
  EmployeeComponent,
  TradeComponent,
  ScanComponent,
  CheckoutComponent,
  ShiftComponent
]
