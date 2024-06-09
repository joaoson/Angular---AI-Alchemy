import { Component } from '@angular/core';
import { UserService } from '../../Shared/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private userService: UserService){}

  clear(){
    this.userService.clearUser();
    location.reload();

  }
}
