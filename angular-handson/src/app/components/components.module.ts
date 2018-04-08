import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsComponent } from './components.component';
import { CreateServerComponent } from './create-server/create-server.component';
import { ListServerComponent } from './list-server/list-server.component';
import { ServerComponent } from './list-server/server/server.component';
import { CreateServerTemplateComponent } from './create-server-template/create-server.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ComponentsComponent,
    CreateServerComponent,
    ListServerComponent,
    ServerComponent,
    CreateServerTemplateComponent],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
