import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  // standalone: true,
  // imports: [],
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

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

}
