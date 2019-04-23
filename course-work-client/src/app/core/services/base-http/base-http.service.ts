import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

interface HttpRequestOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  observe?: any;
  responseType?: any;
  withCredentials?: boolean;
  body?: any;
}


@Injectable()
export class BaseHttpService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  /**
   * Performs HTTP get request
   * @param endpoint API endpoint
   * @param options request options
   */
  protected get<T>(endpoint: string, options?: HttpRequestOptions): Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrl}/${endpoint}`, options);
  }

  /**
   * Performs HTTP post request
   * @param endpoint API endpoint
   * @param body request body
   * @param options request options
   */
  protected post<T>(endpoint: string, body: any, options?: HttpRequestOptions): Observable<T> {
    return this.httpClient.post<T>(`${this.baseUrl}/${endpoint}`, body, options);
  }

  /**
   * Performs HTTP put request
   * @param endpoint API endpoint
   * @param body request body
   * @param options request options
   */
  protected put<T>(endpoint: string, body: any, options?: HttpRequestOptions): Observable<T> {
    return this.httpClient.put<T>(`${this.baseUrl}/${endpoint}`, body, options);
  }

  /**
   * Performs HTTP delete request
   * @param endpoint API endpoint
   * @param options request options
   */
  protected delete<T>(endpoint: string, options?: HttpRequestOptions): Observable<T> {
    return this.httpClient.delete<T>(`${this.baseUrl}/${endpoint}`, options);
  }

  /**
   * Performs HTTP patch request
   * @param endpoint API endpoint
   * @param body request body
   * @param options request options
   */
  protected patch<T>(endpoint: string, body: any, options?: HttpRequestOptions): Observable<T> {
    return this.httpClient.patch<T>(`${this.baseUrl}/${endpoint}`, body, options);
  }

  /**
   * Performs HTTP request
   * @param method HTTP method name
   * @param endpoint API endpoint
   * @param options request options
   */
  protected request<T>(method: string, endpoint: string, options?: HttpRequestOptions): Observable<T> {
    return this.httpClient.request<T>(method, `${this.baseUrl}/${endpoint}`, options);
  }
}
