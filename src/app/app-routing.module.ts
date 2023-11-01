// Aqui eu importo os componentes(páginas) que irei utilizar no projeto
import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginColaboradorComponent } from './login-colaborador/login-colaborador.component';
import { TotemPagesComponent } from './totem-pages/totem-pages.component';
import { TotemIdComponent } from './totem-id/totem-id.component';
import { TotemFimComponent } from './totem-fim/totem-fim.component';
import { TotemLoadingComponent } from './totem-loading/totem-loading.component';

// Aqui defino as todas (url) de cada página com seu respectivo componente 
// o path '' é a tela inicial, então eu coloco o redirectTo para definir qual será a pagina inicial
// então basta adicionar o router-outlet no app.componente.html para que as páginas sejam processadas
const routes: Routes = [
{path: '', redirectTo: '/totem-pages', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'login-colaborador', component: LoginColaboradorComponent},
{path: 'totem-pages', component: TotemPagesComponent},
{path: 'totem-id', component: TotemIdComponent},
{path: 'totem-fim', component: TotemFimComponent},
{path: 'totem-loading', component: TotemLoadingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
