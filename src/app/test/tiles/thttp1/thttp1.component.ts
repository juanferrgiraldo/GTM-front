import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

import { Constants } from '../../../app-constants.component';

@Component({
  selector: 'app-thttp1',
  templateUrl: './thttp1.component.html',
  styleUrls: ['./thttp1.component.css']
})
export class Thttp1Component implements OnInit {
  api: string;
  myData: Array<any>;

  constructor(private http: Http) {
    this.api = Constants.API1 + '/';
    this.http.get(this.api).map(res => res.json()).subscribe(res => this.myData = res);
   }

  ngOnInit() {
  }


}
