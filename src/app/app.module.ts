import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ClientInterfaceComponent } from './client-interface/client-interface.component';
import { HeaderComponent } from './header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import { ItemListComponent } from './item-list/item-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { DisplaySectionComponent } from './display-section/display-section.component';
import { DisplayItemComponent } from './display-item/display-item.component';
import { SectionSeparatorComponent } from './section-separator/section-separator.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { ComponentComponent } from './component/component.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrintErrorComponent } from './print-error/print-error.component';
import { LogInPageComponentComponent } from './log-in-page-component/log-in-page-component.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoggedInNavbarComponent } from './logged-in-navbar/logged-in-navbar.component'; // Import ReactiveFormsModule

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { ProfileComponent } from './Pages/ProfilePage/profile/profile.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { ProfileSettingsComponent } from './Pages/profile-settings/profile-settings.component';
import { SettingsComponent } from './Pages/ProfilePage/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    UsuarioComponent,
    ClientInterfaceComponent,
    HeaderComponent,
    ItemListComponent,
    ListItemComponent,
    DisplaySectionComponent,
    DisplayItemComponent,
    SectionSeparatorComponent,
    FooterComponent,
    LayoutComponent,
    HeaderLayoutComponent,
    ComponentComponent,
    SignUpPageComponent,
    PrintErrorComponent,
    LogInPageComponentComponent,
    HomepageComponent,
    LoggedInNavbarComponent,
    ProfileComponent,
    SidebarComponent,
    ExperienceComponent,
    ProfileSettingsComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule,
    FontAwesomeModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
