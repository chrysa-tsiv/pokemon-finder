import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  message: any;

  @Input() pokemonIndex: number;
  @Input() pokemon: any;
  isExpandAccordion: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  onClick() {
    this.isExpandAccordion = !this.isExpandAccordion;
  }

  capitalizeString(string: string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  showProfile(pokemonIndex: number) {
    this.message = this.pokemon;
    this.refreshGridInAnotherComponent();
  }

  refreshGridInAnotherComponent() {
    this.data.notifyOther({ refresh: true });
    this.newMessage();
  }

  newMessage() {
    this.data.changeMessage(this.message);
  }

}
