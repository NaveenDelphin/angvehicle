import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
//import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { DriverDetailsComponent } from './components/driver-details/driver-details.component';
import { DriverHistoryComponent } from './components/driver-history/driver-history.component';
import { ModalAddVehicleComponent } from './components/vehicle-details/modal-add-vehicle/modal-add-vehicle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalDetailsComponent,
    VehicleDetailsComponent,
    DriverDetailsComponent,
    DriverHistoryComponent,
    ModalAddVehicleComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //FormsModule
// RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDialogModule,

    MatFormFieldModule, //modules for angular material
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
