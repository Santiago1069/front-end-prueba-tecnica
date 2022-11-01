import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // TODO: poner esto en vaaribale de entorno
  API_URL = 'http://localhost:8015/api';

  constructor(private http: HttpClient) {}

  getUsers() : Observable<Array<User>>{
    return this.http.get<Array<User>>(`${this.API_URL}/users`);
  }

  getUser(id: String) : Observable<User> {
    return this.http.get<User>(`${this.API_URL}/users/${id}`);
  }

  deleteUser(id: String){
    return this.http.delete(`${this.API_URL}/users/${id}`);
  }

  saveUser(user: User){
    return this.http.post(`${this.API_URL}/users`, user);
  }

  updateUser(id: String, updateUser: User){
    return this.http.put(`${this.API_URL}/users/${id}`, updateUser);

  }


}
