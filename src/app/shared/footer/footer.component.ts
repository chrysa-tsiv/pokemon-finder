import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {

  footerLinks: any[] = [
    {
      iconPath: 'https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png',
      link: 'https://www.linkedin.com/in/chrysa-tsivintzeli/'
    },
    {
      iconPath: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      link: 'https://github.com/chrysa-tsiv'
    },
    {
      iconPath: 'https://cdn-icons-png.flaticon.com/512/6588/6588143.png',
      link: 'https://drive.google.com/file/d/1VCNmt5cVExr4uWTwkbVR6vX9yDfvr6-1/view'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
