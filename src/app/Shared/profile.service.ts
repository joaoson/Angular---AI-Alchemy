import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private db: AngularFireDatabase) { }

  insert(profile: Profile) {
    this.db.list('profile').push(profile)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(profile: Profile, key: string) {
    this.db.list('profile').update(key, profile)
      .catch((error: any) => {
        console.error(error);
      });
  }


  getAll() {
    return this.db.list('profile')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => {
            const data = c.payload.val() as { [key: string]: any }; // Explicitly cast to an object type
            const key = c.payload.key;
            return { key, ...data };
          });
        })
      );}

  delete(key: string) {
    this.db.object(`profile/${key}`).remove();
  }
}
