import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './binding.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BindingComponent],
  exports: [BindingComponent]
})
export class BindingModule { }
