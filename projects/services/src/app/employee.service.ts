import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string = "/assets/data/employees.json" 

  // http is a local variable
  constructor(private http:HttpClient) { }

  // create a method to get employees and import Observable
  // cast the observable into an employee array
  getEmployees():Observable<IEmployee[]>{
    // hard-coded data
    // return  [
    //   {"id":1,"name":"Mahabir","age":43},
    //   {"id":2,"name":"Babita","age":37},
    //   {"id":3,"name":"Disha","age":25},
    //   {"id":4,"name":"Kiara","age":27},
    // ]
    // getting data by sending Http Get request
    // get request takes in a url as a argument and returns the IEmployee array
    return this.http.get<IEmployee[]>(this._url);
  }
}
