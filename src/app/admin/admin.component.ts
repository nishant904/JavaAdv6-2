import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  aemail: string ="";
  apassword: string ="";
 
 
  constructor(private router: Router,private http: HttpClient) {}
 
 
  aLogin() {
    console.log(this.aemail);
    console.log(this.apassword);
    let bodyData = {
      aemail: this.aemail,
      apassword: this.apassword,
    };
    this.router.navigateByUrl('/aedit');
    //     this.http.post("http://localhost:9090/api/v1/employee/login", bodyData).subscribe(  (resultData: any) => {
    //     console.log(resultData);
    //     if (resultData.message == "Email not exits")
    //     {
      
    //       alert("Email not exits!!!Register First");
    //       this.router.navigateByUrl('/register');
    
    //     }
    //     else if(resultData.message == "Login Success")
    
    //      {
    //       this.router.navigateByUrl('/search');
    //     }
    //     else
    //     {
    //       alert("Incorrect Email and Password not match");
    //     }
 
    //   });
     }
 
}
