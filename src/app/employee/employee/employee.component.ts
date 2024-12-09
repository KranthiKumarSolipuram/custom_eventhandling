import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee-model';
import { NgForm } from '@angular/forms';
import { TestClass } from 'src/app/services/test';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit{
    
    employees = [] as IEmployee[];
    employee = {} as IEmployee;
    person:any;

    constructor(private _testService: TestClass){

    }

    ngOnInit(): void {

      this.person=this._testService.getData("Prashanth","Reddy");
      this.employees=[
        {empNumber: 101, empName:"Kranthi", empSalary: 90000, empAddress: 'Hyderabad'},
        {empNumber: 102, empName:"Prashanth", empSalary: 95000, empAddress: 'Pune'},
        {empNumber: 103, empName:"Naveen", empSalary: 90050, empAddress: 'Hyderabad'},
        {empNumber: 104, empName:"Krishna", empSalary: 90500, empAddress: 'Pune'},
      ]

      
    }
   public addEmployee(f:NgForm){

   } 

   public selectEmployee(emp : any){
    // console.log(emp);
    this.employee=JSON.parse(JSON.stringify(emp)); //Deep Copy
    // this.employee=emp;  //Shallow Copy
   }

   public deleteEmployee(emp : any){
      let pos = this.employees.indexOf(emp);

      if(confirm("Do you want to delete?")){
        if(pos >=0){
          this.employees.splice(pos,1)
          alert("Employee Deleted")
        }
      }
      
   }
}
