import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }
  
  register(userdata: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userdata)
  }
  
  login(userdata: any): Observable<any> {
    return this.http.post( `${this.apiUrl}/login`, userdata).pipe(
      tap(response => this.setSession(response))
    )
  }

  private setSession(authResult: any) {
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('user_type', authResult.user_type);
    localStorage.setItem('user_id', authResult.user_id);
    localStorage.setItem('university_name', authResult.university_name);
    localStorage.setItem('id_or_matricn_number', authResult.id_or_matricn_number);
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user_type');
    localStorage.removeItem('user_id');
    localStorage.removeItem('university_name');
    localStorage.removeItem('id_or_matricn_number');
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }




}
