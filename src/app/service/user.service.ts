import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) { }

  URI:string = "http://localhost:8080/api/user";

  getAllUser():Observable<any>{
      return this.http.get(this.URI);
  }

  saveUser(user:any):Observable<any>{
    return this.http.post(this.URI,user);
  }
}
