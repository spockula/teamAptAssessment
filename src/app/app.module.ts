import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { PlayButtonComponent } from './core/play-button/play-button.component';
import { DescriptionBoxComponent } from './core/description-box/description-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayButtonComponent,
    DescriptionBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
