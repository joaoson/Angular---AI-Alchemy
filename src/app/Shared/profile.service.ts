import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Profile } from './profile';
import { Observable } from 'rxjs';

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

  update(profile: Profile, key: string): Promise<void> {
    return this.db.list('profile').update(key, profile)
      .catch((error: any) => {
        console.error('Error updating profile:', error);
        throw error; // Re-throw to handle it in the caller function if needed
      });
  }


  getAll() {
    return this.db.list('profile')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => {
            const data = c.payload.val() as Profile; // Explicitly cast to an object type
            const key = c.payload.key || "";
            return { key, ...data };
          });
        })
      );}

  checkCredentials(email: string, password: string): Observable<any> {
    return this.getAll().pipe(
      map(profiles => profiles.find(profile => profile.Email === email && profile.Password === password))
    );
  }

  delete(key: string | undefined) {
    this.db.object(`profile/${key}`).remove();
  }
}
