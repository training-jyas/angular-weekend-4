import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingsModule } from './bindings/bindings.module';
import { HeaderModule } from './header/header.module';
import { ComponentsModule } from './components/components.module';
import { DirectivesComponent } from './directives/directives.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHightlightDirective } from './directives/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHightlightDirective
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    ComponentsModule,
    BindingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
