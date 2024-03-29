import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    // Add other components if any
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    // Add other modules if any
  ],
  providers:[EmployeeService,HttpClientModule,HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule { }
