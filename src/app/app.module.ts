import { httpInterceptorProviders } from './components/view/http-interceptors'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { SalaReadComponent } from './components/view/sala/sala-read/sala-read.component';
import { HomeComponent } from './components/view/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FilmeReadComponent } from './components/view/filme/filme-read/filme-read.component';
import { MatButtonModule } from '@angular/material/button';
import { FilmeCreateComponent } from './components/view/filme/filme-create/filme-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FilmeDeleteComponent } from './components/view/filme/filme-delete/filme-delete.component';
import { FilmeUpdateComponent } from './components/view/filme/filme-update/filme-update.component';
import { SessaoReadAllComponent } from './components/view/sessao/sessao-read-all/sessao-read-all.component';
import {MatSelectModule} from '@angular/material/select';
import { SessaoCreateComponent } from './components/view/sessao/sessao-create/sessao-create.component';
import { SessaoReadComponent } from './components/view/sessao/sessao-read/sessao-read.component';
import { SessaoFilmeComponent } from './components/view/sessao/sessao-filme/sessao-filme.component';
import { SessaoDeleteComponent } from './components/view/sessao/sessao-delete/sessao-delete.component';
import { SessaoUpdateComponent } from './components/view/sessao/sessao-update/sessao-update.component';
import { LoginComponent } from './components/view/account/login/login.component';
import { AuthenticationComponent } from './components/view/authentication/authentication.component';
import { SalaSessaoComponent } from './components/view/sala/sala-sessao/sala-sessao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SalaReadComponent,
    HomeComponent,
    FilmeReadComponent,
    FilmeCreateComponent,
    FilmeDeleteComponent,
    FilmeUpdateComponent,
    SessaoReadAllComponent,
    SessaoCreateComponent,
    SessaoReadComponent,
    SessaoFilmeComponent,
    SessaoDeleteComponent,
    SessaoUpdateComponent,
    LoginComponent,
    AuthenticationComponent,
    SalaSessaoComponent,
   
 
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
