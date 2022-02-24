import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from '../models/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(public loginService: LoginService) {}

  ngOnInit(): void {

  }

  login(form: NgForm) {
    console.log(form.value)
  }

}
