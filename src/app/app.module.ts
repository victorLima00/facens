// Aqui eu faço a conexão entre cada componente que fazem parte do módulo app
// Basta eu importar o componente e declarar os mesmos
// o AppRoutingModulo é responsável pela navegação entre as páginas
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
import { TotemFimComponent } from './totem-fim/totem-fim.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginColaboradorComponent,
    TotemPagesComponent,
    TotemIdComponent,
    TotemLoadingComponent,
    TotemFimComponent,
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
