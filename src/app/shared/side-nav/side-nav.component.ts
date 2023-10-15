import { Component, HostListener, Input, OnInit } from '@angular/core';
import { PokemonDetail } from 'src/app/models/pokemon.detail';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() isMobileView: boolean;
  sideNavWrapperClass: string;
  constructor() { }

  ngOnInit(): void {
    this.setClass();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setClass();
  }

  setClass() {
    if (this.isMobileView) {
      this.sideNavWrapperClass = 'side-nav-wrapper mobile'
    } else {
      this.sideNavWrapperClass = 'side-nav-wrapper';
    }
  }
}
