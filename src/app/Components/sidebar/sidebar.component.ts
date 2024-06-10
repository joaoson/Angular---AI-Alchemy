import { Component } from '@angular/core';
import { UserService } from '../../Shared/user.service';
import { Profile } from '../../Shared/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  profile!: Profile | null;

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.profile = this.userService.getUser();
    if(this.profile == null){
      this.router.navigate(['/login']);
      return
    }

  }


  clear(){
    this.userService.clearUser();
    location.reload();

  }
}
