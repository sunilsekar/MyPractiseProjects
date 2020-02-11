import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private httpService: HttpService) { }

  loginFormGroup: FormGroup;

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      "username": new FormControl(null, [Validators.required]),
      "password": new FormControl(null, [Validators.required])
    })
  }

  onLogin() {
    this.httpService.postLogin(this.loginFormGroup.value).subscribe(response => { 
      if (response.status) {
        console.log("Login successful!");
        this.router.navigate(["/home"]);
      } else {
        console.log("Login failed!");
      }
    });
  }

  onCancel() {
    this.loginFormGroup.reset();
  }

}
