import { Component } from '@angular/core';
import { Profile } from '../Shared/profile';
import { UserService } from '../Shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-in-navbar',
  templateUrl: './logged-in-navbar.component.html',
  styleUrl: './logged-in-navbar.component.css'
})
export class LoggedInNavbarComponent {
  key: string = '';
  profile!: Profile | null;

  constructor( private userService : UserService,private router: Router) {}

  ngOnInit(): void {
    this.profile = this.userService.getUser();
    if(this.profile == null){
      this.router.navigate(['/login']);
      return
    }
  }

}
