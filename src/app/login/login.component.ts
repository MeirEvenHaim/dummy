import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Import the AuthService (we'll create this soon)

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  // Call this when the user submits the form
  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login successful!', response); // For now, just log the response
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
