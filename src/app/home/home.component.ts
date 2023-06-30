import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  EmployeeCount:any;

  constructor(private employee:EmployeeService){
    
  }
  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees(){
    this.employee.getEmployeeCount().subscribe(
      (count:number)=>{
        this.EmployeeCount= count;
      }
    );
  }

  

}
