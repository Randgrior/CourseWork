import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthSignUpInfo} from '../../models/auth';
import {AuthService} from '../../core/services/auth/auth.service';
import {TokenStorageService} from '../../core/services/token-storage/token-storage.service';
import {Router} from '@angular/router';

const ROLE_USER = 'User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isSignUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  private signUpInfo: AuthSignUpInfo;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private token: TokenStorageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(5)]],
      }, {validator: this.passwordConfirming}
    );
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return {invalid: true};
    }
  }

  onRegister(): void {
    this.markFormGroupTouched(this.registerForm);
    this.signUpInfo = {
      phone: this.registerForm.get('phone').value,
      username: this.registerForm.get('name').value,
      password: this.registerForm.get('password').value,
      email: this.registerForm.get('email').value,
      role: [ROLE_USER]
    };

    this.authService.attempSignUp(this.signUpInfo).subscribe(
      (data: string) => {
        this.isSignUpFailed = false;
        this.isSignUp = true;
        alert('You have successfully registered');
        this.router.navigateByUrl('/login');
      },
      (error: any) => {
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
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
