import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-firesignup',
    templateUrl: './firesignup.component.html',
    styleUrls: ['./firesignup.component.css']
})
export class FiresignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group ({
      email: [null, [Validators.required, Validators.email]],
      passwords: this.fb.group ({
        password: [null, Validators.required],
        repeatPassword: [null, [Validators.required]]
      }, { validator: this.matchPasswords})
    });
  }

  matchPasswords(ac: AbstractControl) {
    const password = ac.get('password').value;
    const repeatPassword = ac.get('repeatPassword').value;
    if (password !== repeatPassword) {
      ac.get('repeatPassword').setErrors({matchPasswords: true});
    }
    ac.get('repeatPassword').setErrors({matchPasswords: false});
  }

}
