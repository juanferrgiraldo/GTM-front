import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-firesignup',
    templateUrl: './firesignup.component.html',
    styleUrls: ['./firesignup.component.css'] 
})

export class FiresignupComponent implements OnInit {
    signupGroup: FormGroup;

    ngOnInit(){
        this.signupGroup = new FormGroup({            
            'email': new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            'passwords': new FormGroup({
                'password': new FormControl(null, Validators.required),
                'repassword': new FormControl(null, Validators.required),
            })           
        })
    }
    
}