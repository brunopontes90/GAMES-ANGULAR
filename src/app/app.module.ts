import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {LayoutModule} from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ConsolesComponent } from './views/consoles/consoles.component';
import { JogosComponent } from './views/jogos/jogos.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsolesComponent,
    JogosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
