import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent implements OnChanges {
  listaPeliculas: any = [];
  firstRow: any = [];
  secondRow: any = [];
  thirdRow: any = [];
  fourthRow: any = [];
  fifthRow: any = [];
  @Input() page: number = 1;
  totalPages:number = 0;
  nextPage:string = '';
  previousPage:string = '';

  constructor(private peliculasService: PeliculasService) {}

  ngOnChanges(changes: SimpleChanges): void {
      this.page = changes['page'].currentValue;
      this.peliculasService.getPeliculas(this.page.toString()).subscribe( (result) => {
        this.listaPeliculas = result.results;
        //this.totalPages = result.info.pages;
        //if(result.info.next != undefined) this.nextPage = result.info.next;
        //if(result.index.previous != undefined) this.previousPage = result.index.previous;
        this.firstRow = [];
        this.secondRow = [];
        this.thirdRow = [];
        this.fourthRow = [];
        this.fifthRow = [];
        
        for (let index = 0; index < 4; index++) {
          this.firstRow.push(this.listaPeliculas[index]);
          this.secondRow.push(this.listaPeliculas[index + 4]);
          this.thirdRow.push(this.listaPeliculas[index + 8]);
          this.fourthRow.push(this.listaPeliculas[index + 12]);
          this.fifthRow.push(this.listaPeliculas[index + 16]);
        }
      }); 
  }
}
