import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultTableComponent } from './core/result-table/result-table.component';
import { DifferenceTableComponent } from './core/difference-table/difference-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultTableComponent,
    DifferenceTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
