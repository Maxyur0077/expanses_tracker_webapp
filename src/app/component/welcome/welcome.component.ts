import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth/auth.service';
import { BusinessDataService } from 'src/app/services/business-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  isLogging: boolean = true;
  appVersion: string = '';

  constructor(
    public authService: AuthService,
    public _snackBar: MatSnackBar,
    public businessData: BusinessDataService
  ) {}

  ngOnInit(): void {
    this.isLogging = true;
    const LoggedUser = sessionStorage.getItem('LEAD_ID');

    if (LoggedUser) {
      this.authService.onLogout();
      this.isLogging = true;
      this._snackBar.open('You have logged out successfully', '', {
        duration: 3000,
      });
    }

    if (!sessionStorage.getItem('Version')) {
      this.businessData.onGetAppVersion().subscribe((res: any) => {
        this.businessData.appVersion = res.version;
        this.appVersion = res.version;
        sessionStorage.setItem('Version', this.appVersion);
      });
    } else {
      this.appVersion = sessionStorage.getItem('Version') as string;
    }
  }

  onSignUp() {
    this.isLogging = false;
  }

  onLogin() {
    this.isLogging = true;
  }
}
