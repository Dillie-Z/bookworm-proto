import { NgModule } from '@angular/core';
import { ScannerComponent } from './scanner.component';
import { CommonModule } from '@angular/common';
// import { MODULE_COMPONENTS, MODULE_ROUTES } from './employee.routes';



@NgModule({
  imports: [ CommonModule ],
  declarations: [ ScannerComponent ],
  exports: [ ScannerComponent ]
})
export class ScannerModule {}
