import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './model/user.model';
import { UserDto } from './dto/user-dto';
import { ProfileModel } from './model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>('http://localhost:8080/users');
  }

  public saveNewUser(user: UserDto): Observable<UserModel>{
    return this.http.post<UserModel>('localhost', user);
  }

  public getAllProfiles(): Observable<ProfileModel[]>{
    return this.http.get<ProfileModel[]>('http://localhost:8080/profiles');
  }
}
