import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = 'http://localhost:8015/api';

  constructor(private http: HttpClient) {}


  //a GET request is created to communicate with the back-en to get all the users from the database
  getUsers() : Observable<Array<User>>{
    return this.http.get<Array<User>>(`${this.API_URL}/users`);
  }

  //a GET request is created to communicate with the back-en to obtain a user by id from the database
  getUser(id: String) : Observable<User> {
    return this.http.get<User>(`${this.API_URL}/users/${id}`);
  }

  //a DELETE request is created to communicate with the back-en to remove a user by id from the database
  deleteUser(id: String){
    return this.http.delete(`${this.API_URL}/users/${id}`);
  }

  //a POST request is created to communicate with the back-en to save a user in the database
  saveUser(user: User){
    return this.http.post(`${this.API_URL}/users`, user);
  }

  //a PUT request is created to communicate with the back-en to edit a user by id in the database
  updateUser(id: String, updateUser: User){
    return this.http.put(`${this.API_URL}/users/${id}`, updateUser);

  }


}
