import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-publicate',
  templateUrl: './publicate.component.html',
  styleUrls: ['./publicate.component.css']
})
export class PublicateComponent implements OnInit {

  /*const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  }*/

  onFileSelected(event) {
    console.log(event);
  }
  constructor() { }

 /* onPublicate(){
    const fd = new FormData;
    fd.append('image')
    this.http.post('localhost:3001/post', httpOptions).subscribe(res => {console.log(res);
    });
  }*/

  ngOnInit() {
  }

}
