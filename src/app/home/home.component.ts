import { Component, OnInit } from '@angular/core';
import { SampleService } from '../services/sample.service';
import { TestClass } from '../services/test';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
 

  message="";
  cust : any;
  addition! : number;
  substraction! : number;
  multiplication! : number;
  division! : number;
  
  constructor(private _sampleService: SampleService, private _testServices : TestClass){

  }
 
  ngOnInit(): void {
   this.message= this._sampleService.getMessage();
   this.cust=this. _testServices.getData("Kranthi","Reddy");
   this.addition=this._testServices.addition(100,20);
   this.substraction=this._testServices.substraction(100,20);
   this.multiplication=this._testServices.multiplicaion(100,20);
   this.division=this._testServices.division(100,20);
   
  }



}
