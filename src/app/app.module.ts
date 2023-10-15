import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { ContentComponent } from './shared/content/content.component';
import { AccordionComponent } from './shared/content/accordion/accordion.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileCardComponent } from './shared/side-nav/profile-card/profile-card.component';
import { DropdownComponent } from './shared/content/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ContentComponent,
    AccordionComponent,
    ProfileCardComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
