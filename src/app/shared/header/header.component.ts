import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerText: string = 'Pokemon Finder';
  imagePath: string = 'https://logowik.com/content/uploads/images/pokemon4400.logowik.com.webp';

  constructor() { }

  ngOnInit(): void {
  }

}
