import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnChanges {
  listaCharacters: any = [];
  firstRow: any = [];
  secondRow: any = [];
  thirdRow: any = [];
  fourthRow: any = [];
  fifthRow: any = [];
  @Input() page: number = 1;
  totalPages:number = 0;
  nextPage:string = '';
  previousPage:string = '';

  constructor(private charactersService: CharactersService) {}

  ngOnChanges(changes: SimpleChanges): void {
      this.page = changes['page'].currentValue;
      this.charactersService.getCharactersByPage(this.page.toString()).subscribe( (result) => {
        this.listaCharacters = result.results;
        //this.totalPages = result.info.pages;
        //if(result.info.next != undefined) this.nextPage = result.info.next;
        //if(result.index.previous != undefined) this.previousPage = result.index.previous;
        this.firstRow = [];
        this.secondRow = [];
        this.thirdRow = [];
        this.fourthRow = [];
        this.fifthRow = [];
        
        for (let index = 0; index < 4; index++) {
          this.firstRow.push(this.listaCharacters[index]);
          this.secondRow.push(this.listaCharacters[index + 4]);
          this.thirdRow.push(this.listaCharacters[index + 8]);
          this.fourthRow.push(this.listaCharacters[index + 12]);
          this.fifthRow.push(this.listaCharacters[index + 16]);
        }
      }); 
  }
}
