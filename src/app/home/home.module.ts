import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './home.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(MODULE_ROUTES) ],
  declarations: [ MODULE_COMPONENTS ]
})
export class HomeModule {}
