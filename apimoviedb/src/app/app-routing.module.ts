import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/base/home/home.component';
import { CharactersComponent } from './main/base/characters/characters.component';
import { AboutComponent } from './main/base/about/about.component';
import { DetailsComponent } from './main/base/details/details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'characters', component: CharactersComponent},
  {path:'about', component: AboutComponent},
  {path:'characters/details/:id', component: DetailsComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
