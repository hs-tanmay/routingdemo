import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatingsystemsComponent } from './operatingsystems/operatingsystems.component';
import { ProgramminglanguagesComponent } from './programminglanguages/programminglanguages.component';
import { DatabasesComponent } from './databases/databases.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatingsystemsComponent,
    ProgramminglanguagesComponent,
    DatabasesComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
