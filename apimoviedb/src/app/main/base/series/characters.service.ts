import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http:HttpClient) { }

  getCharactersByPage(page:string): Observable<any>{
    return this.http.get<any>('https://rickandmortyapi.com/api/character/?page='+page);
  }

  getCharactersById(id:string): Observable<any>{
    return this.http.get<any>('https://rickandmortyapi.com/api/character/'+id);
  }

  getPage(url:string): Observable<any>{
    return this.http.get<any>(url);
  }
}
