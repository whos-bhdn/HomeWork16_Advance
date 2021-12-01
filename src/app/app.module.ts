import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './pages/home/home.component';
import { Hw12Component } from './pages/hw12/hw12.component';
import { Hw13Component } from './pages/hw13/hw13.component';
import { Hw14Component } from './pages/hw14/hw14.component';
import { Hw15Component } from './pages/hw15/hw15.component';
import { MainComponent } from './pages/hw14/main/main.component';
import { TableComponent } from './pages/hw14/main/table/table.component';
import {FormsModule} from "@angular/forms";
import { SearchPipePipe } from './shared/pipes/search-pipe.pipe';
import { PhonePipePipe } from './shared/pipes/phone-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    Hw12Component,
    Hw13Component,
    Hw14Component,
    Hw15Component,
    MainComponent,
    TableComponent,
    SearchPipePipe,
    PhonePipePipe
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
