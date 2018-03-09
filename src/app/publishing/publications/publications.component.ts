import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  api: string;
  myData: Array<any>;
  constructor(private http: Http) {
    this.api = 'https://jsonplaceholder.typicode.com/photos';
    // this.api = 'localhost:3002/';
    this.http.get(this.api).map(res => res.json()).subscribe(res => this.myData = res);
    console.log(this.myData);
  }

  /*post: any;
  constructor (private http: HttpClient) {}*/

  ngOnInit() {
    // this.http.get('localhost:3002/myposts').subscribe(res => {
      // this.post = res;
    // });
  }
}
