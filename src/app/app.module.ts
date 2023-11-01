import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginColaboradorComponent } from './login-colaborador/login-colaborador.component';
import { TotemPagesComponent } from './totem-pages/totem-pages.component';
import { TotemIdComponent } from './totem-id/totem-id.component';
import { TotemLoadingComponent } from './totem-loading/totem-loading.component';
import { TotemQuestionComponent } from './totem-question/totem-question.component';
import { TotemScanComponent } from './totem-scan/totem-scan.component';
import { TotemFimComponent } from './totem-fim/totem-fim.component';
import { TotemErroComponent } from './totem-erro/totem-erro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginColaboradorComponent,
    TotemPagesComponent,
    TotemIdComponent,
    TotemLoadingComponent,
    TotemQuestionComponent,
    TotemScanComponent,
    TotemFimComponent,
    TotemErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
