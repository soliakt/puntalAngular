import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MobileTableComponent } from './mobile-table.component';

@NgModule({
  declarations: [MobileTableComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [MobileTableComponent] 
})
export class MobileTableModule {}