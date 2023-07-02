import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'https://jsonplaceholder.typicode.com/users/';
  userData: any = { username: '', password: '' };

  constructor(private http: HttpClient) { }

  register = (userDetails: any) => {
    console.log(userDetails);
    return this.http.post(this.userUrl, userDetails);
  };

  login = (userDetails: any) => {
    console.log(userDetails);
    return this.http.get(this.userUrl);
  };

  logout = () => {
    console.log('logout');
    this.setUserData({ username: '', password: '' });
  };

  setUserData = (userDetails: any) => {
    console.log(userDetails);
    this.userData = userDetails;
  };

  getUserData = () => {
    console.log('getUserData');
    return this.userData;
  };

  // register = () => { };

  // logout = () => { };

}

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor(private http: HttpClient) { }

//   loginUrl: string = 'https://jsonplaceholder.typicode.com/users/';



//   loginService = (userDetails: any) => {

//     return this.http.get(this.loginUrl);

//   };


// }
