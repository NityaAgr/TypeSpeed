import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components.navbar/component.navbar';
import { TableComponent } from './components.table/table.component';
import { ScrollTextComponent } from './components.scrolltext/component.scrolltext';
import { ParagraphComponent } from './components.paragraph/component.paragraph';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    ScrollTextComponent,
    ParagraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent, TableComponent, ScrollTextComponent, ParagraphComponent]
}) 
export class AppModule { }
            