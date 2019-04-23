import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {AuthLoginInfo, AuthSignUpInfo, JwtResponse} from 'src/app/models';
import {BaseHttpService} from 'src/app/core/services/base-http/base-http.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AuthService extends BaseHttpService {
  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.post<JwtResponse>('rest/auth/signin', credentials, httpOptions);
  }

  attempSignUp(info: AuthSignUpInfo): Observable<string> {
    return this.post<string>('rest/auth/signup', info, httpOptions);
  }
}
