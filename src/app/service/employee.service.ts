import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getEmployees() {
    console.log("test call");
    return this.httpClient.get<Employee>('http://localhost:8080/employees');
  }
}
