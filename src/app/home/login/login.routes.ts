import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { LoginComponent } from './login.component'

export const MODULE_ROUTES: Route[] = [
  { path: 'login', pathMatch: 'full' , component: LoginComponent }


]
