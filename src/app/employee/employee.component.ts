import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private employeeService:EmployeeService
  ) { }

  employees: Employee;
  
  ngOnInit() {
    let res = this.employeeService.getEmployees();
    res.subscribe(
      (data) =>{this.employees=data;
      console.log(this.employees);
    });
  }

}
