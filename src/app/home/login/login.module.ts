import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  Http,
  Response,
  RequestOptions,
  Headers
} from '@angular/http';

import { MODULE_COMPONENTS, MODULE_ROUTES } from './login.routes';
// import { LoginComponent } from './login.component'


@NgModule({
  imports: [ CommonModule, RouterModule.forChild(MODULE_ROUTES)],
  declarations: [ MODULE_COMPONENTS ]
})
export class LoginModule {}
