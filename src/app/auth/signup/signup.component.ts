import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  myForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  onSignup() {
    const user = new User(
      this.myForm.value.email,
      this.myForm.value.name,
      this.myForm.value.user,
      this.myForm.value.password
    );
    // tslint:disable-next-line:no-unused-expression
    this.myForm.value.password1;
    this.authService.signup(user)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/signin');
      },
      error => console.error(error)
    );
    this.myForm.reset();
    // this.myForm.value.password1.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        // tslint:disable:max-line-length
        // tslint:disable-next-line:quotemark
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      name: new FormControl(null, Validators.required),
      user: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

}
