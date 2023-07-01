import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResistenciasModule } from './practicas/resistencias/resistencias/resistencias.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { D2pModule } from './practicas/distancia2p/d2p/d2p.module';
import { CinepolisModule } from './practicas/cinepolis/cinepolis/cinepolis.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ResistenciasModule,
    D2pModule,
    CinepolisModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
