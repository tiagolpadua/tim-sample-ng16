import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManterComponent } from './pages/manter/manter.component';
import { ListarComponent } from './pages/listar/listar.component';
import { DetalharComponent } from './pages/detalhar/detalhar.component';

@NgModule({
  declarations: [
    AppComponent,
    ManterComponent,
    ListarComponent,
    DetalharComponent
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
