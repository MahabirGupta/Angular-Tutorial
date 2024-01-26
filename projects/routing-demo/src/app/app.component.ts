import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { PageNotFoundComponent } from "../../page-not-found/page-not-found.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PageNotFoundComponent]
})
export class AppComponent {

navigateToEmployees() {
console.log('Navigating to employees...');
  this.router.navigate(['/employees']);
}
navigateToDepartments() {
  console.log('Navigating to departments...');
  this.router.navigate(['/departments']);
}

isDepartmentActive() {
  // Check if the current route matches the '/departments' path
  return this.router.isActive('/departments', true);
}

isEmployeeActive() {
  // Check if the current route matches the '/departments' path
  return this.router.isActive('/employees', true);
}
  // title = 'routing-demo';
  constructor(private router: Router) {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationStart) {
    //     console.log('NavigationStart:', event.url);
    //   }
    //   if (event instanceof NavigationEnd) {
    //     console.log('NavigationEnd:', event.url);
    //   }
    // });
}
}