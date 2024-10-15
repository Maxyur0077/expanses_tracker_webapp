import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BusinessDataService } from 'src/app/services/business-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  signUpForm!: FormGroup;
  isSignIn = true;
  LoginContinue = false; // Re-added for template binding
  SignUpContinue = false; // Re-added for template binding
  isPasswordVisible = false;
  isConfirmPasswordVisible = false;

  constructor(
    private route: Router,
    private authService: AuthService,
    private busServ: BusinessDataService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initializeForms();
  }

  private initializeForms(): void {
    this.loginForm = new FormGroup({
      gmail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });

    this.signUpForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      username: new FormControl('', Validators.required),
      gmail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  toggle(): void {
    this.isSignIn = !this.isSignIn;
  }

  signIn(): void {
    if (this.loginForm.valid) {
      this.LoginContinue = true;
      this.authService
        .onLogin(this.loginForm.value)
        .then(() => {
          this.busServ.isChecking = false;
          this.showSnackBar('Login successful!', 'success');
        })
        .catch(() => {
          this.busServ.isChecking = false;
          this.showSnackBar('Login failed. Please try again.', 'error');
        })
        .finally(() => {
          this.LoginContinue = false;
        });
    } else {
      this.showSnackBar('Invalid credentials. Please try again.', 'error');
    }
  }

  signUp(): void {
    if (this.signUpForm.valid) {
      this.SignUpContinue = true;
      this.authService
        .onSignUp(this.signUpForm.value)
        .then(() => {
          this.showSnackBar('Account created successfully!', 'success');
        })
        .catch(() => {
          this.showSnackBar('Sign-up failed. Please try again.', 'error');
        })
        .finally(() => {
          this.SignUpContinue = false;
        });
    } else {
      this.showSnackBar('Please fill out the form correctly.', 'error');
    }
  }

  togglePasswordVisibility(type: 'password' | 'confirmPassword'): void {
    if (type === 'password') {
      this.isPasswordVisible = !this.isPasswordVisible;
    } else if (type === 'confirmPassword') {
      this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
    }
  }

  private showSnackBar(message: string, type: 'success' | 'error'): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: [`snackbar-${type}`],
    });
  }
}
