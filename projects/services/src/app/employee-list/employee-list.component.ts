import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Employee List</h2>
            <ul *ngFor="let employee of employees">
                <li>{{employee.name}}</li>
          </ul>
          <h2>Employee List</h2>
          <ul *ngFor="let employee of employees">
                <li>{{employee.id}}.{{employee.name}} - {{employee.age}},</li>
          </ul>
  `,
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {;

  public employees = [

    {"id":1,"name":"Mahabir","age":43},
    {"id":2,"name":"Babita","age":37},
    {"id":3,"name":"Disha","age":25},
    {"id":4,"name":"Kiara","age":27},
  ];

  constructor(){

  }
  
  ngOnInit(): void {
    
  }

}

