import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { User } from './user.model';

@Injectable()
export class AuthService {
    constructor(private http: Http) {}
    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});  // To let backend know that frontend are gettin JSON data.
        return this.http.post('http:localhost:3001/signup', body, {headers: headers})
            .map((res: Response) => res.json())
            .catch((err: Response) => Observable.throw(err.json()));
    }
}
