import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginColaboradorComponent } from './login-colaborador/login-colaborador.component';
import { TotemPagesComponent } from './totem-pages/totem-pages.component';
import { TotemIdComponent } from './totem-id/totem-id.component';
import { TotemFimComponent } from './totem-fim/totem-fim.component';
import { TotemErroComponent } from './totem-erro/totem-erro.component';
import { TotemLoadingComponent } from './totem-loading/totem-loading.component';
import { TotemQuestionComponent } from './totem-question/totem-question.component';
import { TotemScanComponent } from './totem-scan/totem-scan.component';

const routes: Routes = [
{path: '', redirectTo: '/totem-pages', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'login-colaborador', component: LoginColaboradorComponent},
{path: 'totem-pages', component: TotemPagesComponent},
{path: 'totem-id', component: TotemIdComponent},
{path: 'totem-fim', component: TotemFimComponent},
{path: 'totem-erro', component: TotemErroComponent},
{path: 'totem-loading', component: TotemLoadingComponent},
{path: 'totem-question', component: TotemQuestionComponent},
{path: 'totem-scan', component: TotemScanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
