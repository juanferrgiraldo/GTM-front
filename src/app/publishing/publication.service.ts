import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Publication } from './publication.model';
import { Constants } from '../app-constants.component';

@Injectable()
export class PublicationService {
    constructor(private http: Http) {}
        publicate(publicate: Publication) {
            const body = JSON.stringify(publicate);
            console.log(publicate);
            const token = localStorage.getItem('token')     // check if I have a token in localaStorage
            ? 'Bearer ' + localStorage.getItem('token')     // if token is not null
            : '';
            const headers = new Headers({'authorization': token, 'Content-Type': 'application/json'});
            return this.http.post(Constants.API1 + '/post', body, {headers: headers})
                .map((res: Response) => res.json())
                .catch((err: Response) => Observable.throw(err.json()));
        }
}
