import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

import { Constants } from '../../app-constants.component';
import { Publicaciones1Component } from './publicaciones1/publicaciones1.component';
import { Publicaciones2Component } from './publicaciones2/publicaciones2.component';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
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