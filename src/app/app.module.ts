import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FoursquareApiService } from './foursquare-api/foursquare-api.service';
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
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    FoursquareApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
