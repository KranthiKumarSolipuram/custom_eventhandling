import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../customer-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  
  customers =[] as ICustomer[];
  customer ={} as ICustomer;
  custFormGroup !: FormGroup;
  submitted=false;

  constructor(private _formBuilder : FormBuilder){

  }
  
  ngOnInit() : void{
    this.customers=[
      {custNumber:101, custName : 'Kranthi', custAmount : 90000, custAddress: 'Hyderabad'},
      {custNumber:102, custName : 'Prashanth', custAmount : 80000, custAddress: 'Vizag'},
      {custNumber:103, custName : 'Krishna', custAmount : 70000, custAddress: 'Chennai'},
      {custNumber:104, custName : 'Naveen', custAmount : 60000, custAddress: 'Pune'}
    ]

    this.custFormGroup=this. _formBuilder.group({
      custNumber : [null, Validators.required],
      custName : [null, Validators.required],
      custAmount : [null, Validators.required],
      custAddress : [null, Validators.required]
    });
  }

  public get f(){
    return this.custFormGroup.controls;
  }

  public addCustomer(){
    this.submitted = true;
    if(this.custFormGroup.invalid)
      return
  }

  public selectCust(cust: any){
    // console.log(cust);
    this.custFormGroup.patchValue(cust);
  }

  public deleteCust(cust : any){
    let pos = this.customers.indexOf(cust);
    if(pos >= 0){
      this.customers.splice(pos,1);
      alert("Customer is Deleted")
    }
  }
}
