import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
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
  LoginContinue = false;
  SignUpContinue = false;
  showPassword = false;
  showConfirmPassword = false;
  showLoginPassword = false;
  signInButton = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private busServ: BusinessDataService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForms();
  }

  private initializeForms(): void {
    this.signUpForm = this.fb.group(
      {
        name: ['', Validators.required],
        username: ['', Validators.required],
        gmail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );

    this.loginForm = this.fb.group({
      gmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  showValidationSummary(): any {
    return (
      (this.signUpForm.get('name')?.invalid &&
        this.signUpForm.get('name')?.touched) ||
      (this.signUpForm.get('username')?.invalid &&
        this.signUpForm.get('username')?.touched) ||
      (this.signUpForm.get('gmail')?.invalid &&
        this.signUpForm.get('gmail')?.touched) ||
      (this.signUpForm.get('password')?.invalid &&
        this.signUpForm.get('password')?.touched) ||
      (this.signUpForm.hasError('passwordMismatch') &&
        this.signUpForm.get('confirmPassword')?.touched)
    );
  }

  passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { passwordMismatch: true };
  }

  toggle(): void {
    this.isSignIn = !this.isSignIn;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  toggleLoginPasswordVisibility(): void {
    this.showLoginPassword = !this.showLoginPassword;
  }

  signIn(): void {
    if (this.loginForm.valid) {
      this.LoginContinue = true;
      this.authService
        .onLogin(this.loginForm.value)
        .then(() => {
          this.showSnackBar('Login successful!', 'success');
          this.router.navigate(['/dashboard']); // Redirect to dashboard or any other page
        })
        .catch(() => {
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
    this.signInButton = true;

    if (this.signUpForm.valid) {
      this.SignUpContinue = true;
      this.authService
        .onSignUp(this.signUpForm.value)
        .then(() => {
          this.showSnackBar('Account created successfully!', 'success');
          this.router.navigate(['/dashboard']); // Redirect to dashboard or any other page
        })
        .catch((error) => {
          this.showSnackBar('Login failed. Please try again.', 'error');
        })
        .finally(() => {
          this.SignUpContinue = false;
        });
    } else {
      if (this.signUpForm.hasError('passwordMismatch')) {
        this.showSnackBar('Passwords do not match. Please try again.', 'error');
      } else {
        this.showSnackBar('Please fill out the form correctly.', 'error');
      }
    }
  }

  private showSnackBar(message: string, type: 'success' | 'error'): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: [`snackbar-${type}`],
    });
  }
}
