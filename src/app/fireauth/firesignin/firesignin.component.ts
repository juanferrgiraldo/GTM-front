import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-firesignin',
    templateUrl: './firesignin.component.html',
    styleUrls: ['./firesignin.component.css']
})

export class FiresigninComponent implements OnInit {
    signinGroup: FormGroup;

    ngOnInit() {
        this.signinGroup = new FormGroup({
            'email': new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            'password': new FormControl(null, Validators.required)
        });
    }
}
