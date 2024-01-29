import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule],
  template: `<h3>Department List</h3>
            <ul class="items">
              <li (click)="onSelect(department) " *ngFor="let department of departments">
              <span class="badge">{{department.id}}</span> {{department.name}}
            </li>
            </ul>
  
  `,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  // Create an array of departments
  departments = [
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"},
    {"id":5,"name":"Bootstrap"}
  ]

  // Inject the router
  constructor(private router: Router){
    console.log('DepartmentListComponent constructor called');
    // this.navigateToDepartments();
  };

  // navigateToDepartments() {
  //   console.log('Navigating to departments...');
  //   this.router.navigate(['/departments']);
  // }
  ngOnInit(): void {
    console.log('DepartmentListComponent ngOnInit called');
  }

  onSelect(department: any){
    // argument for navigate([]) is a link url
      this.router.navigate(['/departments',department.id])
  }
}
