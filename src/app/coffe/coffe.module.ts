import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeListComponent } from './coffe-list/coffe-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CoffeListComponent],
  declarations: [CoffeListComponent]
})
export class CoffeModule { }
