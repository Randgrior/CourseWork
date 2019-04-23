export class JwtResponse {
  token: string | undefined;
  type: string;
  username: string;
  authorities: string[];
}
