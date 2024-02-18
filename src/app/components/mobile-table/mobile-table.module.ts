import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileTableComponent } from './mobile-table.component';

@NgModule({
  declarations: [MobileTableComponent],
  imports: [CommonModule],
  exports: [MobileTableComponent] 
})
export class MobileTableModule {}