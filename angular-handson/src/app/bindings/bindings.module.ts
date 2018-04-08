import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsComponent } from './bindings.component';
import { SampleComponent } from './sample/sample.component';
import { Sample2Module } from './sample2/sample2.module';
import { Sample3Component } from './sample3/sample3.component';
import { Sample4Component } from './sample3/sample4/sample4.component';
import { Sample5Module } from './sample5/sample5.module';
import { BindingModule } from './binding/binding.module';

@NgModule({
  imports: [
    CommonModule,
    Sample2Module,
    Sample5Module,
    BindingModule
  ],
  declarations: [
    BindingsComponent,
    SampleComponent,
    Sample3Component,
    Sample4Component
  ],
  exports: [BindingsComponent]
})
export class BindingsModule { }
