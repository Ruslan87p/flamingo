import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CounterComponent } from './counter/counter.component';
import { ServicesComponent } from './services/services.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { IconsAboutCompanyComponent } from './icons-about-company/icons-about-company.component';
import { ChartComponent } from './chart/chart.component';
import { SpecializationComponent } from './specialization/specialization.component';

import { FooterComponent } from './footer/footer.component';
import { AnchorService } from './anchor.service';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { Canva } from './chart/canvas';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CounterComponent,
    ServicesComponent,
    AboutCompanyComponent,
    IconsAboutCompanyComponent,
    ChartComponent,
    SpecializationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [AnchorService, ThemeService, Canva],
  bootstrap: [AppComponent]
})
export class AppModule { }
