import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListofnotesComponent } from './components/listofnotes/listofnotes.component';
import { NewnotesComponent } from './components/newnotes/newnotes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListofnotesComponent,
    NewnotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
