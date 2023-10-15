import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pokedex';

  public getScreenWidth: any;
  public getScreenHeight: any;
  isMobileView: boolean = false;
  smallScreenSize: number = 768; // 768px portrait
  appWrapperClass: string;
  appContentWrapperClass: string;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    this.setMobileView();
    this.setClass();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getScreenWidth = event.target.innerWidth;
    this.getScreenHeight = event.target.innerHeight;
    
    this.setMobileView();
    this.setClass();
  }

  setClass() {
    if (this.isMobileView) {
      this.appContentWrapperClass = 'app-content-wrapper-mobile';
    } else {
      this.appContentWrapperClass = 'app-content-wrapper';
    }
  }

  setMobileView() {
    if (this.getScreenWidth <= this.smallScreenSize) { 
      this.isMobileView = true;
    }
    if (this.getScreenWidth >= this.smallScreenSize) { 
      this.isMobileView = false;
    }
  }
}
