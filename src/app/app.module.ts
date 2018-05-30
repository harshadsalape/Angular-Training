import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsideComponent } from './aside.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { SectionComponent } from './section.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppTestComponentComponent } from './app-test-component/app-test-component.component';
import { HighlightDirective } from './home/highlight.directive';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    SectionComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AppTestComponentComponent,
    HighlightDirective,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path:'home',
      component: HomeComponent
    }, {
      path:'about',
      component: AboutComponent
    }, {
      path:'contact',
      component: ContactComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent, AsideComponent, FooterComponent, HeaderComponent, SectionComponent]
})
export class AppModule { }
