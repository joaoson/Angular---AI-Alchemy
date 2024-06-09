import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Profile } from './profile';
import { Experience } from './experience';

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

  delete(key: string) {
    this.db.object(`experience/${key}`).remove();
  }
}
