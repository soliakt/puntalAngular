import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MobileTableComponent } from './mobile-table.component';
import { MobileFormComponent } from '../mobile-form/mobile-form.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [MobileTableComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, MobileFormComponent],
  exports: [MobileTableComponent] 
})
export class MobileTableModule {}