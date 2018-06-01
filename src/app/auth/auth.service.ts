import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import { User } from './user.model';
import { Constants } from '../app-constants.component';

@Injectable()
export class AuthService {
    constructor(private http: Http) {}
    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});  // To let backend know that frontend are gettin JSON data.
        return this.http.post(Constants.API1 + '/signup', body, {headers: headers})
            .map((res: Response) => res.json())
            .catch((err: Response) => Observable.throw(err.json()));
    }
    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});  // To let backend know that frontend are gettin JSON data.
        return this.http.post(Constants.API1 + '/signin', body, {headers: headers})
            .map((res: Response) => res.json())
            .catch((err: Response) => Observable.throw(err.json()));
    }
    logout() {
        localStorage.clear();
    }
    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}
