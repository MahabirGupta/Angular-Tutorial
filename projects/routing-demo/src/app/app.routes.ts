import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from '../../department-list/department-list.component';
import { EmployeeListComponent } from '../../employee-list/employee-list.component';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    // set a default path
    { path: '', redirectTo: '/departments',pathMatch:'full' },
    { path: 'departments', component: DepartmentListComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: "**",component:PageNotFoundComponent},
    // { path: 'not-found', component: PageNotFoundComponent }, // Define not-found route
    // { path: '**', redirectTo: '/not-found' } // Redirect to not-found component
  ];

  console.log('Routes:', routes); // Add this line to log routes

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
// Create an array of routingComponent and export it
export const routingComponents = [DepartmentListComponent,EmployeeListComponent,PageNotFoundComponent]