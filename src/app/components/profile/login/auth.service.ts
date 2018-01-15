import { IUser } from './../user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  listUser = [
    {
      id: 1,
      userName: 'lykhanhduy2008@gmail.com',
      firstName: 'Solitary',
      lastName: 'Wolve',
      password: 'LKD!@(1996)'
    },
    {
      id: 2,
      userName: 'lykhanhduy2206@gmail.com',
      firstName: 'Geum',
      lastName: 'Bi',
      password: 'LKD!@(1996)'
    }
  ];

  constructor() { }
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = this.listUser.find(user => user.userName === userName && user.password === password);
    if (this.currentUser) {
      return this.currentUser;
    } else {
      return false;
    }
  }
  isAuthenticated() {
    return !!this.currentUser;
  }
}
