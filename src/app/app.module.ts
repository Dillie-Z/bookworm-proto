import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarModule } from './navbar';
import { FooterModule } from './footer'
import { HomeModule } from "./home";
import { AppComponent } from './app.component';
import { LoginModule } from './home/login';
import { AUTH_PROVIDERS } from './home/login/auth.service';
import { LoggedInGuard } from './guards/loggedIn.guard';
import { ScannerModule } from './home/employee/scanner';
import { SearchModule } from './home/employee/search';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    HomeModule,
    LoginModule,
    RouterModule.forRoot([])
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// { provide: LocationStrategy, useClass: HashLocationStrategy },
