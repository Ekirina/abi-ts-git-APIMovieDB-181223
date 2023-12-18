import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './base/home/home.component';
import { AboutComponent } from './base/about/about.component';
import { DetailsComponent } from './base/details/details.component';
import { CharactersComponent } from './base/characters/characters.component';
import { CharacterComponent } from './base/characters/character/character.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,
    BaseComponent,
    HomeComponent,
    AboutComponent,
    DetailsComponent,
    CharactersComponent,
    CharacterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    DetailsComponent,
    CharactersComponent,
    BaseComponent
  ],
})
export class MainModule {}
