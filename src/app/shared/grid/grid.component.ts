import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  gridColumns = [] as any;
  gridData = [] as any; 

  sortOder= false;

  @Input('dataList')
  public set setData(dataList : any ){
    if(dataList.length){
      this.gridColumns = Object.keys(dataList[0]);
      this.gridData = dataList;
    }
  }
  dataList=[] as any; //getting the collection from the employee parent component

  @Output()
  selectedObj: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  deleteObj: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(){
    // console.log(this.dataList)
  }

  public selectRecord(row: any){
      this.selectedObj.emit(row);
      // console.log(row);
  }

  public deleteRecord(row : any){
    this.deleteObj.emit(row);
  }
  public sortData(colName : any){
    this.sortOder=!this.sortOder;
    if(this.sortOder)
    {
    this.gridData = this.gridData.sort((a: { [x: string]: number; }, b: { [x: string]: number; }) => {
        if(a[colName] < b[colName])
          return -1;
        else if (a[colName] > b[colName])
          return 1;
        else
        return 0;
    });
   }else{
    this.gridData = this.gridData.sort((a: { [x: string]: number; }, b: { [x: string]: number; }) => {
      if(a[colName] < b[colName])
        return 1;
      else if (a[colName] > b[colName])
        return -1;
      else
      return 0;
  });
   }
}
}
