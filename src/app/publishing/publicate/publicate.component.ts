import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PublicationService } from '../publication.service';
import { Publication } from '../publication.model';

@Component({
  selector: 'app-publicate',
  templateUrl: './publicate.component.html',
  styleUrls: ['./publicate.component.css']
})
export class PublicateComponent implements OnInit {
  publicateForm: FormGroup;

  constructor(private publicationService: PublicationService, private router: Router) { }

  onFileSelected(event) {
    console.log(event);
  }

 onPublicate() {
  const publication = new Publication(
    this.publicateForm.value.type,
    this.publicateForm.value.productName,
    this.publicateForm.value.user,
    this.publicateForm.value.imagePath,
    this.publicateForm.value.description
  );
  this.publicationService.publicate(publication)
    .subscribe(
      data => {
      console.log(data);
    },
    error => console.log(error)
  );
}

  ngOnInit() {
    this.publicateForm = new FormGroup({
      type: new FormControl(null, Validators.required),
      productName: new FormControl(null, Validators.required),
      user: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      imagePath: new FormControl(null, Validators.required)
    });
  }
}
