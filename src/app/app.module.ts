import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CovidDailyComponent } from './page/covid-daily/covid-daily/covid-daily.component';
import { CovidProvinceComponent } from './page/covid-daily/covid-province/covid-province.component';
import { TopBarComponent } from './Layout/Top-bar/Top-bar.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DxDataGridModule } from 'devextreme-angular';
import { FooterComponent } from './Layout/Footer/Footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CovidDailyComponent,
    CovidProvinceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DxDataGridModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
