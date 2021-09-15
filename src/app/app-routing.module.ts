import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { ListFlightsComponent } from './list-flights/list-flights.component';
import { ModifyFlightComponent } from './modify-flight/modify-flight.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';

const routes: Routes = [
  { path: 'createFlight', component: CreateFlightComponent },
  { path: 'modifyFlight', component: ModifyFlightComponent },
  { path: 'deleteFlight', component: DeleteFlightComponent },
  { path: 'viewFlight', component: ViewFlightComponent },
  { path: '', component: ListFlightsComponent}

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
