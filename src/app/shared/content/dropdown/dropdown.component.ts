import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  // initial value for limit when loading the component
  limit: number = 24; 
  // emitted limit after user selects another value from the dropdown
  @Output() limitEvent = new EventEmitter<number>(); 
  options: number[] = [12, 24, 48];

  constructor(private data: DataService) { }

  ngOnInit(): void {}

  sendLimit() {
    this.limitEvent.emit(this.limit);
  }

  onChange(value:string): void {
	  this.limit = Number(value);
    this.sendLimit();
	}

}
