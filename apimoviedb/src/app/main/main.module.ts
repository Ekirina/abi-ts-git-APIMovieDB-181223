import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './base/home/home.component';
import { DetailsComponent } from './base/details/details.component';
import { PeliculasComponent } from './base/peliculas/peliculas.component';
/*import { PeliculaComponent } from './base/peliculas/peliculas/pelicula.component';*/
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,
    BaseComponent,
    HomeComponent,
    DetailsComponent,
    PeliculasComponent,
    /*PeliculaComponent,*/
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    DetailsComponent,
    PeliculasComponent,
    BaseComponent
  ],
})
export class MainModule {}
