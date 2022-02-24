import { Injectable } from '@angular/core';
import { User } from 'src/app/components/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  selectedUser: User

  constructor() {
    this.selectedUser = new User
  }
}
