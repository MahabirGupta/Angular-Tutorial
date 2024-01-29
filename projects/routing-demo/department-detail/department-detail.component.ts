import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  standalone: true,
  imports: [],
  template: `<h3>You selected department with id = {{departmentId}}</h3>`,
  styleUrl: './department-detail.component.css'
})
export class DepartmentDetailComponent implements OnInit {

    public departmentId: any;
// Inject in the constructor
// route is the instance of the ActivatedRoute
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    // read the route parameter
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.departmentId = id;
  }

}
