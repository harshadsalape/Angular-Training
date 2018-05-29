import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsideComponent } from './aside.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { SectionComponent } from './section.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, AsideComponent, FooterComponent, HeaderComponent, SectionComponent]
})
export class AppModule { }
