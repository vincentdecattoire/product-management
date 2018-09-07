import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {



  // private handleError:HandleError;



  private _personas: BehaviorSubject<Persona[]>;

  private dataStore: {
    personas: Persona[]
  };

  constructor(private http: HttpClient) {
    this.dataStore = { personas: [] };
    this._personas = new BehaviorSubject<Persona[]>([]);
  }

get personas(): Observable<Persona[]> {
  return this._personas.asObservable();
}

personaById(id: number) {
  // tslint:disable-next-line:triple-equals
  return this.dataStore.personas.find(x => x.id == id);
}

loadAll() {

  const userUrl = 'https://angular-material-api.azurewebsites.net/users';

  return this.http.get<Persona[]>(userUrl)
      .subscribe(data => {
        this.dataStore.personas = data;
        this._personas.next(Object.assign({}, this.dataStore).personas);
      },
        error => {
          console.log('Failed to fetch personas:' + error);
        }
  );



}

}
