import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../peliculas/peliculas.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pelicula:any = null;

  constructor(private route: ActivatedRoute,private peliculaService: PeliculasService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const elementId:number = Number(params['id']);
      this.pelicula = this.peliculaService.getPeliculasById(elementId.toString())
        .subscribe(result => {
          this.pelicula = result;
          console.log(this.pelicula);
          
        });      
    });
  }
}
