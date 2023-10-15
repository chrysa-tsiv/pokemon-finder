import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetail } from 'src/app/models/pokemon.detail';
import { DataService } from '../../data.service';
import { ContentService } from '../../content/content.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  message: any;
  selectedPokemon: any;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    // subscribe to the selected pokemon to show details
    this.data.currentMessage.subscribe(message => this.message = message);
    // this.data.notifyObservable$.subscribe(async res => {
    //       await this.getPokemonProfile(); 
    // })
  }

  // api sends text in lower case and with dash instead of space
  // so i am using the two functions below to make the text readable
  capitalizeString(string: string) {
    string = this.removeDash(string);
    return string[0].toUpperCase() + string.slice(1);
  }

  removeDash(string: any) {
    return string.replace("-", " ");
  }

}
