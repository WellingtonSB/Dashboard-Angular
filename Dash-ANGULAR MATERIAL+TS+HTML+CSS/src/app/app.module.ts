import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HomeComponent } from './paginas/home/home.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlertasComponent } from './alertas/alertas.component';
import { EntrarComponent } from './paginas/entrar/entrar.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { CadastrarComponent } from './paginas/cadastrar/cadastrar.component';
import { EditarProdutoComponent } from './paginas/edit/produto/produto.component';
import { DeletarProdutoComponent } from './paginas/delete/produto/produtos.component';
import { EditarCategoriaComponent } from './paginas/edit/categoria/categoria.component';
import { DeletarCategoriaComponent } from './paginas/delete/categoria/categoria.component';
import { CadastrarProdutoComponent } from './paginas/produtor/cadastrar-produto/cadastrar-produto.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastrarComponent,
    AlertasComponent,
    EntrarComponent,
    SobreComponent,
    EditarProdutoComponent,
    DeletarProdutoComponent,
    EditarCategoriaComponent,
    DeletarCategoriaComponent,
    CadastrarProdutoComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DefaultModule,
    OrderModule,
    FormsModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
