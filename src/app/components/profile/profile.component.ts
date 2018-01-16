import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    const firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    const lastName  = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  cancle() {
    this.router.navigate(['events']);
  }
  saveProfile(profileFormValue) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(profileFormValue.firstName, profileFormValue.lastName);
      this.router.navigate(['events']);
    }
  }
  validatefirstName() {
    return this.profileForm.controls.firstName.invalid && this.profileForm.controls.firstName.touched;
  }
}
