import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';

// Import the Employee interface
interface Employee {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Employee Details</h2>
            <h3>{{errorMsg}}</h3>

  <ul *ngFor="let employee of employees">
        <li>{{employee.id}}.{{employee.name}} - {{employee.age}},</li>
  </ul>`,
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent implements OnInit {

  
  // Intialize an empty array
  public employees:Employee[] = [

    // {"id":1,"name":"Mahabir","age":43},
    // {"id":2,"name":"Babita","age":37},
    // {"id":3,"name":"Disha","age":25},
    // {"id":4,"name":"Kiara","age":27},
  ];

  public errorMsg: any;
  // To include the service in the constructor
  constructor(private _employeeService:EmployeeService){
    // the local variable is giving an instance of the class EmployeeService

  }
  ngOnInit(): void {
    this._employeeService.getEmployees() // this method returns an observable
    // first data is the argument to the function 
    // last data is the body of the function we are assigning the employee data to the employees property
    .subscribe(data => this.employees = data,
              error => this.errorMsg = error);// to receive data we need to subscribe to the observable
    // Once we subscribe to the observable the employee data arrives asynchronously we assign the data to our class property using the => syntax
    
  }

}
