import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './employee.routes';
import { SearchModule } from './search';
import { ScannerModule } from './scanner';
import { SearchComponent } from './search/search.component';
import { ScannerComponent } from './scanner/scanner.component';

@NgModule({
  imports: [ RouterModule.forChild(MODULE_ROUTES), SearchModule, ScannerModule ],
  declarations: [ MODULE_COMPONENTS ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EmployeeModule {}
