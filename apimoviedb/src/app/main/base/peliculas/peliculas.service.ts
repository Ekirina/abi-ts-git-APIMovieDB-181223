import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient) { }

  getPeliculas(movie:string): Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie/now_playing?api_key=f4233629a936e727b870607977870044');
  }

  getPeliculasById(id:string): Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie'+id+'?api_key=f4233629a936e727b870607977870044');
  }
}
