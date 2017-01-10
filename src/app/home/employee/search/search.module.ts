import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { CommonModule } from '@angular/common';
// import { MODULE_COMPONENTS, MODULE_ROUTES } from './employee.routes';



@NgModule({
  imports: [ CommonModule ],
  declarations: [ SearchComponent ],
  exports: [ SearchComponent ]
})
export class SearchModule {}
