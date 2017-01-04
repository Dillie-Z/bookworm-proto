import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './login.routes';

@NgModule({
  imports: [ RouterModule.forChild(MODULE_ROUTES) ],
  declarations: [ MODULE_COMPONENTS ]
})
export class LoginModule {}