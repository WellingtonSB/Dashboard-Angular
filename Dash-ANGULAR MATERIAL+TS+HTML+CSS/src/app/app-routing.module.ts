import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CadastrarComponent } from './paginas/cadastrar/cadastrar.component';
import { EntrarComponent } from './paginas/entrar/entrar.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { EditarProdutoComponent } from './paginas/edit/produto/produto.component';
import { DeletarProdutoComponent } from './paginas/delete/produto/produtos.component';
import { DeletarCategoriaComponent } from './paginas/delete/categoria/categoria.component';
import { EditarCategoriaComponent } from './paginas/edit/categoria/categoria.component';
import { CadastrarProdutoComponent } from './paginas/produtor/cadastrar-produto/cadastrar-produto.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'editar-produto/:id', component: EditarProdutoComponent },
  { path: 'delete-produto/:id', component: DeletarProdutoComponent },
  { path: 'categoria-edit/:id', component: EditarCategoriaComponent },
  { path: 'categoria-delete/:id', component: DeletarCategoriaComponent },
  { path: 'cadastrar-produto', component: CadastrarProdutoComponent },

  {
    path: '', component: DefaultComponent,
    children:
      [{ path: '', component: DashboardComponent },]

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
