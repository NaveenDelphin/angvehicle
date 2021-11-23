import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './components/home/home.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { DriverDetailsComponent } from './components/driver-details/driver-details.component';
import { DriverHistoryComponent } from './components/driver-history/driver-history.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes:Routes=[
  
    {path: '',component:HomeComponent},
    {path:'personalDetails',component:PersonalDetailsComponent},
    {path:'vehicleDetails',component:VehicleDetailsComponent},
    {path:'driverDetails',component:DriverDetailsComponent},
    {path:'driverHistory',component:DriverHistoryComponent},
    {path: '**', component: NotFoundComponent}
 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
