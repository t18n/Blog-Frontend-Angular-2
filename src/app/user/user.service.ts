import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Register } from './register';
import { HttpClient } from './../HttpClient';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from './../../environments/environment';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    login(user: User): Observable<User> {
        return this.http.post(environment.apiRoute + 'oauth/token', user)
            .map(res => res.json() as User)
            .catch(this.handleError)
    }



    register(register: Register): Observable<Register> {
        return this.http.post(environment.apiRoute + 'register', register)
            .map(res => res.json() as Register)
            .catch(this.handleError)
    }

    //   logout(): Observable<any> {
    //     return this.http.post(environment.apiRoute + this.userUrl + 'logout', {});
    //   }

      setAccessToken(token: string): void {
          this.http.setAccessToken(token);
      }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.json().error);
    }
}
