import { Injectable } from '@angular/core';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userKey = 'currentUser';

  setUser(user: Profile): void {
    sessionStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getUser(): Profile | null {
    const userString = sessionStorage.getItem(this.userKey);
    console.log(userString)
    return userString ? JSON.parse(userString) as Profile : null;
  }

  clearUser(): void {
    sessionStorage.removeItem(this.userKey);
  }
}
