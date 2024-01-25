import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

// import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CommonModule } from '@angular/common';
// import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
// import the routingComponents from app-routing.module.ts
import { routingComponents } from './app-routing.module';
import { DepartmentListComponent } from '../../department-list/department-list.component';
import { EmployeeListComponent } from '../../employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    // DepartmentListComponent
    // Add other components if any
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule // it is part of the routing demo application
    // Add other modules if any
  ],
  providers:[HttpClientModule,HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule { 

    constructor(){
        console.log('AppModule constructor called');
    }
}
