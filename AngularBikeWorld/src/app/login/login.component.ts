import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Response } from '../models/response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private httpService: HttpService) { }

  loginFormGroup: FormGroup;
  loginResponse: Response;

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      "username": new FormControl(null, [Validators.required]),
      "password": new FormControl(null, [Validators.required])
    })
  }

  onLogin() {
    this.httpService.postLogin(this.loginFormGroup.value).subscribe(response => this.loginResponse = {
      status: response.status,
      message: response.message,
      token: response.token
    });
    //console.log("onLogin :: " + this.loginResponse.message);
    if (this.loginResponse.status) {
      console.log("Login successful!");
      this.router.navigate(["/home"]);
    } else {
      console.log("Login failed!");
    }
  }

}
