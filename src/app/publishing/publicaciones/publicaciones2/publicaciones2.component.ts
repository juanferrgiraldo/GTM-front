import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

import {Constants } from '../../../app-constants.component';

@Component({
  selector: 'app-publicaciones2',
  templateUrl: './publicaciones2.component.html',
  styleUrls: ['./publicaciones2.component.css']
})
export class Publicaciones2Component implements OnInit {
  api: string;
  myData: Array<any>;

  constructor(private http: Http) {
    this.api = Constants.API2 + '/';
    this.http.get(this.api).map(res => res.json()).subscribe(res => this.myData = res);
    console.log(this.myData);
   }

  ngOnInit() {
  }

}
