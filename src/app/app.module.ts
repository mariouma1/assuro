import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RoutingModule } from './routing/routing.module';
import { VerticalNavComponent } from './FixComponent/vertical-nav/vertical-nav.component';
import { HorizontalNavComponent } from './FixComponent/horizontal-nav/horizontal-nav.component';
import { FooterComponent } from './FixComponent/footer/footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    VerticalNavComponent,
    HorizontalNavComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
