import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about';
import { ContactComponent } from './contact';
import { BooksComponent } from './books'
import { LoginComponent } from './login/login.component'


export const MODULE_ROUTES: Route[] = [
  { path: '', pathMatch: 'full' , component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login' , component: LoginComponent }

]

//might just be extra
export const MODULE_COMPONENTS = [
  HomeComponent,
  AboutComponent,
  ContactComponent,
  BooksComponent,
  LoginComponent
]
