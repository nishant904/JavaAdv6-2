import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  employeename: string ="";
  email: string ="";
  password: string ="";
 
 
  constructor(private http: HttpClient,private router:Router )
  {
 
  }
  save()
  {
  
    let bodyData = {
      "employeename" : this.employeename,
      "email" : this.email,
      "password" : this.password
    };
    this.http.post("http://localhost:9090/api/v1/employee/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully");
        this.router.navigateByUrl("/login")
 
    });
  }
 
}
