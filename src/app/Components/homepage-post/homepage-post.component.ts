import { Component } from '@angular/core';
import { Profile } from '../../Shared/profile';
import { Observable } from 'rxjs';
import { Model } from '../../Shared/model';
import { ModelService } from '../../Shared/model.service';
import { ProfileService } from '../../Shared/profile.service';
import { UserService } from '../../Shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-post',
  templateUrl: './homepage-post.component.html',
  styleUrl: './homepage-post.component.css'
})
export class HomepagePostComponent {
  profile!: Profile | null;
  key: string = '';
  profileUpdated!: Profile | null;
  models! : Observable<any>;
  model!: Model ;
  profiles!: Observable<any>;

  constructor(private modelsService: ModelService, private profileService: ProfileService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.profile = this.userService.getUser();
    if(this.profile == null){
      this.router.navigate(['/login']);
      return
    }
    this.profiles = this.profileService.getAll()


    this.models = this.modelsService.getAll();
    console.log(this.models)

  }

}
