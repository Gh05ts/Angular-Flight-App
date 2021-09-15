import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { ModifyFlightComponent } from './modify-flight/modify-flight.component';
import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { StorageService } from '../services/dbService'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ListFlightsComponent } from './list-flights/list-flights.component';
import { PipesModule } from 'src/pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateFlightComponent,
    ModifyFlightComponent,
    DeleteFlightComponent,
    ViewFlightComponent,
    ListFlightsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    PipesModule,
    HttpClientInMemoryWebApiModule.forRoot(StorageService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
