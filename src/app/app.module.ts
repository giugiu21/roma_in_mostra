import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { CKEditorComponent, CKEditorModule } from '@ckeditor/ckeditor5-angular';


import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MostreComponent } from './components/mostre/mostre.component';
import { MostraCardComponent } from './shared/mostra-card/mostra-card.component';
import { ListaMostreComponent } from './components/mostre/lista-mostre/lista-mostre.component';
import { ScrollingCardComponent } from './shared/scrolling-card/scrolling-card.component';
import { DetailComponent } from './components/mostre/detail/detail.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { AddMostraComponent } from './components/mostre/add-mostra/add-mostra.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';

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
    AddMostraComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    DropdownModule,
    PaginatorModule,
    ToastModule,
    CKEditorModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
