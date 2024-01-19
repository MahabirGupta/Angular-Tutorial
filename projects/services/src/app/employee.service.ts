import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  // create a method to get employees
  getEmployees(){
    return  [
      {"id":1,"name":"Mahabir","age":43},
      {"id":2,"name":"Babita","age":37},
      {"id":3,"name":"Disha","age":25},
      {"id":4,"name":"Kiara","age":27},
    ]
  }
}
