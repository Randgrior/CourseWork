import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthLoginInfo} from '../../models/auth';
import {TokenStorageService} from '../../core/services/token-storage/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;


  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        password: ['', [Validators.required]],
      }
    );
  }

  onLogin(): void {
    this.markFormGroupTouched(this.loginForm);
    this.loginInfo = {
      username: this.loginForm.get('name').value,
      password: this.loginForm.get('password').value,
    };
    this.authService.attemptAuth(this.loginInfo).subscribe(
      (data: any) => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        window.location.assign('/books');

      },
      (error: any) => {
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
