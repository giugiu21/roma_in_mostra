import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MostreComponent } from './components/mostre/mostre.component';
import { MostraCardComponent } from './shared/mostra-card/mostra-card.component';
import { ListaMostreComponent } from './components/mostre/lista-mostre/lista-mostre.component';
import { ScrollingCardComponent } from './shared/scrolling-card/scrolling-card.component';
import { DetailComponent } from './components/mostre/detail/detail.component';
import { RegistrationComponent } from './components/user/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MostreComponent,
    MostraCardComponent,
    ListaMostreComponent,
    ScrollingCardComponent,
    DetailComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
