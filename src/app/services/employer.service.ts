import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})


export class EmployerService {

  constructor(private http:HttpClient) { }


   
  addEmployer(employer:any) {

    return this.http.post<any>("http://localhost:8082/addEmployer",employer)
  }

}
