import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

import {Constants } from '../../../app-constants.component';

@Component({
  selector: 'app-publicaciones1',
  templateUrl: './publicaciones1.component.html',
  styleUrls: ['./publicaciones1.component.css']
})
export class Publicaciones1Component implements OnInit {
  api: string;
  myData: Array<any>;

  constructor(private http: Http) {
    this.api = Constants.API1 + '/';
    this.http.get(this.api).map(res => res.json()).subscribe(res => this.myData = res);
    console.log(this.myData);
   }

  ngOnInit() {
  }

}
