import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  

  private apiUrl = 'http://localhost:9090/count';

  constructor(private http: HttpClient) { }

  getEmployeeCount(): Observable<number>{
    return this.http.get<number>(this.apiUrl);
  }
}
