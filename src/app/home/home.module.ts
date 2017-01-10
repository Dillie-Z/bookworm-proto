import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './home.routes';
import { CommonModule } from '@angular/common';
import { EmployeeModule } from './employee/employee.module'


@NgModule({
  imports: [ CommonModule, RouterModule.forChild(MODULE_ROUTES), EmployeeModule],
  declarations: [ MODULE_COMPONENTS ]
})
export class HomeModule {}
