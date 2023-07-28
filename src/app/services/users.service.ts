import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usersData } from '../_helpers/fakeData';
import { Observable } from 'rxjs';
import { ProfileCard } from '../_helpers/interfaces/profile-card';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsersData(): Observable<ProfileCard[]> {
    const obsUsingCreate = Observable.create( (observer: any )=> {
      observer.next( usersData )
      observer.complete()
    })
    return obsUsingCreate;
  }

}
