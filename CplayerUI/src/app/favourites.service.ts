import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Favs } from './fav';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
// dependency injection of http client
constructor(private http: HttpClient) { }

// Get method to get the favourites of a particular user by the help of its username
getData(): Observable<any> {
  return this.http.get<any>(`http://50.23.1.37:32123/api/fav`).pipe(
    map(
      userData => {
        return userData;
      }));
}

// Post method to add a player to favourites
addData(fav: Favs): Observable<any> {
  return this.http.post<any>(`http://50.23.1.37:32123/api/fav`, fav).pipe(
    map(
      userData => {
        return userData;
      }));
}

// Delete method to remove all the players from the favourites of a particular user
deleteData(pid: number): Observable<any> {
  return this.http.delete<any>(`http://50.23.1.37:32123/api/fav?pid=${pid}`).pipe(
    map(
      userData => {
        return userData;
      }));
}

}
