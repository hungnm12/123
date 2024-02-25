import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8003/api/v1/auth'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/authenticate`, body);
  }

  signup(fullName: string, password: string, email: string): Observable<any> {
    const body = { fullName, password, email };
    return this.http.post(`${this.apiUrl}/register`, body);
  }
}