import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient for making HTTP requests
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/login/'; // Replace with your Django URL

  constructor(private http: HttpClient) {}

  // Function to log in the user
  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(this.apiUrl, { username, password }) // Send POST request to Django
      .pipe(
        map((response) => {
          // If the login is successful, store the access and refresh tokens
          if (response.access && response.refresh) {
            localStorage.setItem('access_token', response.access);
            localStorage.setItem('refresh_token', response.refresh);
          }
          return response;
        })
      );
  }

  // Get the access token from local storage
  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // Clear tokens on logout
  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }
}
