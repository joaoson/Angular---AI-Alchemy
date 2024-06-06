import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ClientInterfaceComponent } from './client-interface/client-interface.component';
import { DisplaySectionComponent } from './display-section/display-section.component';
import { LayoutComponent } from './layout/layout.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ComponentComponent } from './component/component.component';
import { LogInPageComponentComponent } from './log-in-page-component/log-in-page-component.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: "produto", component: ProdutoComponent},
  {path: "usuario", component: UsuarioComponent},
  {path: "", component: ClientInterfaceComponent},
  {path: "teste", component: DisplaySectionComponent},
  {path: "layout", component: LayoutComponent},
  {path: "signUp", component: SignUpPageComponent},
  {path: "component", component: ComponentComponent},
  {path: "login", component: LogInPageComponentComponent},
  {path: "homepage", component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
