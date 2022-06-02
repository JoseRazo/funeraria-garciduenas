import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { SliderPrincipalComponent } from './views/slider-principal/slider-principal.component';
import { ServiciosComponent } from './views/servicios/servicios.component';
import { InstalacionesComponent } from './views/instalaciones/instalaciones.component';
import { FooterComponent } from './views/footer/footer.component';
import { NosotrosComponent } from './articles/nosotros/nosotros.component';
import { FilialesComponent } from './articles/filiales/filiales.component';
import { ContactoComponent } from './articles/contacto/contacto.component';
import { InstallationsComponent } from './articles/installations/installations.component';
import { ServicesComponent } from './articles/services/services.component';
import { NotFoundComponent } from './articles/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SliderPrincipalComponent,
    ServiciosComponent,
    InstalacionesComponent,
    FooterComponent,
    NosotrosComponent,
    FilialesComponent,
    ContactoComponent,
    InstallationsComponent,
    ServicesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'nosotros',
        component: NosotrosComponent
      },
      {
        path: 'servicios',
        component: ServicesComponent
      },
      {
        path: 'instalaciones',
        component: InstallationsComponent
      },
      {
        path: 'filiales',
        component: FilialesComponent
      },
      {
        path: 'contacto',
        component: ContactoComponent
      },
      {
        path: '404',
        component: NotFoundComponent
      },
      {
        path: "**",
        redirectTo: "/404"
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NotFoundComponent],
})
export class AppModule { }
