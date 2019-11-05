import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  constructor(private http: HttpClient) {
    let token: any = localStorage.getItem('currentUser');
    this.isTokenExpired(token)
      .subscribe(res => {
        this.isLoginSubject.next(true);
      });
  }
  // Java Backend Deflaut URL
  api_user_url = 'http://103.241.146.254:8095';

  public isLoginSubject1: BehaviorSubject<Boolean> =
    new BehaviorSubject(false);
  isLoginSubject = new BehaviorSubject<boolean>(false);


  isLoggedIn(): Observable<boolean> {
    console.log(this.isLoginSubject.asObservable());

    return this.isLoginSubject.asObservable();
  }
  login(): void {
    this.isLoginSubject.next(true);
  }
  logout(): void {
    this.isLoginSubject.next(false);
  }


  /* private hasToken(): boolean {
    return !!localStorage.getItem('currentUser');
  } */

  //Get All User List
  getAllApiUsers(): Observable<any> {
    return this.http.get(this.api_user_url + "/api/allUser");
  }

  //For Login User 
  setUserLogin(obj): Observable<any> {
    return this.http.post(this.api_user_url + "/login1", obj);
  }

  // To Validate User 
  public isAuthenticated(): boolean {
    //Checking weather token is Present in Local Storage
    let token: any = localStorage.getItem('currentUser');
    if (!!token) {
      return this.ValidateToken(token);
    }
    return false;
    //If Token isPresent then Validate Found token is Expired Or not
    // return this.ValidateToken(token);
  }

  // Subcribe IsTokenExpired Request to Get Value from Server
  public ValidateToken(token): any {
    return this.isTokenExpired(token)
      .subscribe(res => {
        return res
      });

  }

  //Check From Backend Token Is Expired or Not
  isTokenExpired(token): Observable<any> {
    const param = new HttpParams().append('token', token)
    return this.http.get(this.api_user_url + '/validateToken', { params: param });

  }

}
