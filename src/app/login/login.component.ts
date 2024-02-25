import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '' ;
  password: string = '';
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  login(): void {
    this.authService.login(this.email, this.password)
      .subscribe(
        response => {
          // Successful login
          // Save authentication token and redirect to chat component or desired page
          // Example: localStorage.setItem('token', response.token);
          this.router.navigate(['/chat']);
        },
        error => {
          // Error handling
          this.errorMessage = error.message;
        }
      );
  }
}
