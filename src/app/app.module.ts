import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { SearchbuttonComponent } from './components/searchbutton/searchbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    SearchbuttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
