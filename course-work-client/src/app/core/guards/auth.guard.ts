import {Injectable} from '@angular/core';
import {CanLoad, Router} from '@angular/router';

import {TokenStorageService} from '../services/token-storage/token-storage.service';

@Injectable()
export class AuthGuard implements CanLoad {
  temporaryToken: string;

  constructor(
    private token: TokenStorageService,
    private router: Router
  ) {
  }

  canLoad(): boolean {
    this.temporaryToken = this.token.getToken();

    if (!this.temporaryToken) {
      this.router.navigate(['/']);

      return false;
    }

    return true;
  }
}
