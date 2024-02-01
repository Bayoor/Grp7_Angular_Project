import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { User } from '../../data/user.interface';

const BASE_URL = 'https://jsonplaceholder.typicode.com';


const httpOptions  ={
  headers: new HttpHeaders({'Content-Type': 'application-json'})
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

 users :User[] = [];

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${BASE_URL}/users`, httpOptions);
   
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${BASE_URL}/users/${id}`, httpOptions);
  }

  private handleError(error: any){
    return throwError(() => new Error(error.message || "server not found"))
  }
}
