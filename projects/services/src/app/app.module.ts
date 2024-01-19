import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent
    // Add other components if any
  ],
  imports: [
    BrowserModule,
    FormsModule
    // Add other modules if any
  ],
  providers:[],
  bootstrap: [AppComponent],
})
export class AppModule { }
