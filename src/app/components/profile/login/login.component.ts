import { Router } from '@angular/router';
import { IUser } from './../user.model';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private authService: AuthService, private route: Router) { }
  message: string;
  ngOnInit() {
  }

  login(formValue) {
    if (!this.authService.loginUser(formValue.value.userName, formValue.value.password)) {
      this.message = 'Tai khoan hoac mat khau khong dung';
    }
    this.route.navigate(['events']);
  }
}
