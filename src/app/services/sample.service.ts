import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  public getMessage(){
    return "This is comming from sample service"
  }
}
