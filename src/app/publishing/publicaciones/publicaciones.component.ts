import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

import {Constants } from '../../app-constants.component';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  api: string;
  myData: Array<any>;

  constructor(private http: Http) {
    this.api = Constants.API + '/';
    this.http.get(this.api).map(res => res.json()).subscribe(res => this.myData = res);
    console.log(this.myData);
   }

  ngOnInit() {
  }

}
