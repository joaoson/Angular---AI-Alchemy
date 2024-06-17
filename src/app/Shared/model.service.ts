import { Injectable } from '@angular/core';
import { Model } from './model';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Experience } from './experience';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private db: AngularFireDatabase) { }

  insert(model: Model) {
    this.db.list('model').push(model)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  getExperience(key: string): Observable<Model> {
    return this.db.object<Model>(`model/${key}`).snapshotChanges().pipe(
      map(snapshot => {
        const data = snapshot.payload.val() as Model;
        const key = snapshot.payload.key;
        return { key, ...data } as Model;
      })
    );
  }


  updateExperience(model: Model, key: string): Promise<void> {
    return this.db.list('model').update(key, model)
      .catch((error: any) => {
        console.error(error);
      });
  }


  getAll() {
    return this.db.list('model')
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
        return this.db.list('model', ref => ref.orderByChild('user').equalTo(userId))
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
    this.db.object(`model/${key}`).remove();
  }

}
