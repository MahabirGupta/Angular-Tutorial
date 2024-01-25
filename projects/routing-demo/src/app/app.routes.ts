import { Routes } from '@angular/router';
import { DepartmentListComponent } from '../../department-list/department-list.component';
import { EmployeeListComponent } from '../../employee-list/employee-list.component';

export const routes: Routes = [
    { path: 'departments', component: DepartmentListComponent },
    { path: 'employees', component: EmployeeListComponent },
  ];
