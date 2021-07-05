import { NgModule,   CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AyarossaComponent } from './components/ayarossa/ayarossa.component';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ListCvComponent } from './components/list-cv/list-cv.component';
import { AddCvComponent } from './components/add-cv/add-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    AyarossaComponent,
    LoginComponent,
    InscriptionComponent,
    ListCvComponent,
    AddCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
