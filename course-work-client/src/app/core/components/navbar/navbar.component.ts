import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../services/token-storage/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  info: any;
  authority: string;

  roles: string[];

  constructor(
    private token: TokenStorageService
  ) {
  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    if (this.token.getToken()) {
      this.roles = this.token.getAuthorities();
      this.roles.every((role: string) => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';

          return false;
        }

        this.authority = 'user';

        return true;
      });
    }

  }

  logout(): void {
    this.token.signOut();
    window.location.assign('/');

  }
}
