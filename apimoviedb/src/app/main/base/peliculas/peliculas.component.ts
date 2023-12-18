import { Component } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent{
  actualPage:number = 1;

  nextPage(){
    if(this.actualPage<42) this.actualPage++;
  }
  previousPage(){
    if(this.actualPage>1) this.actualPage--;
  }
  goToFirstPage(){
    this.actualPage = 1;
  }
  goToLastPage(){
    this.actualPage = 42;
  }
}
