import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { DepartmentListComponent } from "../../department-list/department-list.component";
import { EmployeeListComponent } from "../../employee-list/employee-list.component";

const routes:Routes=[
    // define all the routes. Each route is an object
    // define 2 routes. One for departmentList and one for employeeList
    {path:'departments',component:DepartmentListComponent},
    {path:'employees',component:EmployeeListComponent}
    // { path: '', redirectTo: '/departments', pathMatch: 'full' }
];

console.log('Routes:', routes); // Add this line to log routes

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
// Create an array of routingComponent and export it
export const routingComponents = [DepartmentListComponent,EmployeeListComponent]