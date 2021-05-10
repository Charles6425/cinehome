import { SalaSessaoComponent } from './components/view/sala/sala-sessao/sala-sessao.component';
import { AuthGuard } from './components/view/account/auth.guard';
import { AuthenticationComponent } from './components/view/authentication/authentication.component';
import { LoginComponent } from './components/view/account/login/login.component';

import { SessaoUpdateComponent } from './components/view/sessao/sessao-update/sessao-update.component';
import { SessaoDeleteComponent } from './components/view/sessao/sessao-delete/sessao-delete.component';
import { SessaoReadComponent } from './components/view/sessao/sessao-read/sessao-read.component';
import { SessaoReadAllComponent } from './components/view/sessao/sessao-read-all/sessao-read-all.component';
import { SessaoCreateComponent } from './components/view/sessao/sessao-create/sessao-create.component';

import { FilmeUpdateComponent } from './components/view/filme/filme-update/filme-update.component';
import { FilmeDeleteComponent } from './components/view/filme/filme-delete/filme-delete.component';
import { FilmeCreateComponent } from './components/view/filme/filme-create/filme-create.component';
import { FilmeReadComponent } from './components/view/filme/filme-read/filme-read.component';
import { SalaReadComponent } from './components/view/sala/sala-read/sala-read.component';
import { HomeComponent } from './components/view/home/home.component';
import { NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessaoFilmeComponent } from './components/view/sessao/sessao-filme/sessao-filme.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'filmes', component: FilmeReadComponent },
      { path: 'filmes/create', component: FilmeCreateComponent },
      { path: 'filmes/delete/:id', component: FilmeDeleteComponent },
      { path: 'filmes/update/:id', component: FilmeUpdateComponent },
      { path: 'salas', component: SalaSessaoComponent},
      { path: 'salas/:id_sala/sessao', component: SessaoReadAllComponent },
      { path: 'sessao', component: SessaoReadComponent },
      { path: 'sessao/salas', component: SalaReadComponent },
      { path: 'sessao/salas/:id_sala/filmes', component: SessaoFilmeComponent },
      { path: 'sessao/salas/:id_sala/filmes/:id_filme/create', component: SessaoCreateComponent },
      { path: 'sessao/delete/:id', component: SessaoDeleteComponent },
      { path: 'sessao/:id/update', component: SessaoUpdateComponent }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
