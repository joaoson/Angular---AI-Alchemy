import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Profile } from './profile';
import { Experience } from './experience';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private db: AngularFireDatabase) { }

  insert(experience: Experience) {
    this.db.list('experience').push(experience)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(experience: Experience, key: string) {
    this.db.list('experience').update(key, experience)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getExperience(key: string): Observable<any> {
    return this.db.object(`experience/${key}`).valueChanges();
  }


  getAll() {
    return this.db.list('experience')
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

      getExperiencesByUser(userId: string | null) {
        return this.db.list('experience', ref => ref.orderByChild('user').equalTo(userId))
          .snapshotChanges()
          .pipe(
            map(changes => {
              return changes.map(c => {
                const data = c.payload.val() as { [key: string]: any };
                const key = c.payload.key;
                return { key, ...data };
              });
            })
          );
      }

  delete(key: string) {
    this.db.object(`experience/${key}`).remove();
  }
}
