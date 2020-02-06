import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  loginFormGroup: FormGroup;

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      "username": new FormControl(null, [Validators.required]),
      "password": new FormControl(null, [Validators.required])
    })
  }

  onLogin() {
    console.log(this.loginFormGroup.controls["username"].value);
    if (this.loginFormGroup.controls["username"].value == "sekars" && this.loginFormGroup.controls["password"].value == "password") {
      console.log("Login success!");
      this.router.navigate(["/home"]);
    } else {
      console.log("Login failed!");
    }
  }

}
