import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { LoginComponent } from './login.component'
import { EmployeeComponent } from '../employee/employee.component'
import { LoggedInGuard } from '../../guards/loggedIn.guard'
import { SignupComponent } from './signup/signup.component'

export const MODULE_ROUTES: Route[] = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'employee', component: EmployeeComponent},
  { path: 'signup', component: SignupComponent}
]

export const MODULE_COMPONENTS = [
  EmployeeComponent,
  SignupComponent
]
