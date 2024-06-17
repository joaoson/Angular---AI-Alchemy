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
import { ProfileComponent } from './Pages/ProfilePage/profile/profile.component';
import { SettingsComponent } from './Pages/ProfilePage/settings/settings.component';
import { EditExperienceComponent } from './Components/edit-experience/edit-experience.component';
import { ModelsPageComponent } from './Pages/models-page/models-page.component';
import { EditModelComponent } from './Components/edit-model/edit-model.component';

const routes: Routes = [
  {path: "", component: ClientInterfaceComponent},
  {path: "signUp", component: SignUpPageComponent},
  {path: "component", component: ComponentComponent},
  {path: "login", component: LogInPageComponentComponent},
  {path: "homepage", component: HomepageComponent},
  {path: "profile", component: ProfileComponent},
  {path: "models", component: ModelsPageComponent},
  {path: 'settings', component: SettingsComponent},
  { path: 'edit-experience/:key', component: EditExperienceComponent }, // Define the edit route
  { path: 'edit-model/:key', component: EditModelComponent }, // Define the edit route
  { path: '', redirectTo: '/profile', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/profile' } // Fallback route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
