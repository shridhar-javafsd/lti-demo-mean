import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginInput: any = {
    username: '',
    password: ''
  };

  welcomeMessage: string = '';

  constructor(private userService: UserService) { }

  submitLogin = () => {
    this.userService.login(this.loginInput)
      .subscribe((resp: any) => {
        resp.forEach((element: any) => {
          if (element.username === this.loginInput.username) {
            this.userService.setUserData(element);
          }
        });
        this.welcomeMessage = (this.userService.getUserData().username) ? 'Hi ' + this.userService.getUserData().username + '!' : 'Invalid credentials!';
        this.loginInput = { username: '', password: '' }; // clear form values
      });
  };
}




// import { Component } from '@angular/core';
// import { UserService } from 'src/app/services/user.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// // client to make HTTP requests 

// export class LoginComponent {

//   constructor(private userService: UserService) { }

//   loginInput: any = {
//     username: '',
//     password: ''
//   };
//   loginUrl: string = 'https://jsonplaceholder.typicode.com/users/';
//   isLoggedIn: boolean = false;
//   welcomeMessage: any = '';

//   submitLogin = () => {
//     this.userService.login(this.loginInput)
//       .subscribe((resp: any) => {
//         resp.forEach((element: any) => {
//           if (element.username === this.loginInput.username) {
//             this.isLoggedIn = true;
//           }
//         });
//         this.welcomeMessage = (this.isLoggedIn) ? 'Hi ' + this.loginInput.username + '!' : 'Invalid credentials!';
//         this.loginInput = { username: '', password: '' }; // clear form values
//         this.isLoggedIn = false;
//       });
//   };
// }


// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// // client to make HTTP requests 

// export class LoginComponent {

//   constructor(private http: HttpClient) { }

//   loginInput: any = {
//     username: '',
//     password: ''
//   };
//   loginUrl: string = 'https://jsonplaceholder.typicode.com/users/';
//   isLoggedIn: boolean = false;
//   welcomeMessage: any = '';

//   submitLogin = () => {
//     this.http.get(this.loginUrl)
//       .subscribe((resp: any) => {
//         resp.forEach((element: any) => {
//           if (element.username === this.loginInput.username) {
//             this.isLoggedIn = true;
//           }
//         });
//         this.welcomeMessage = (this.isLoggedIn) ? 'Hi ' + this.loginInput.username + '!' : 'Invalid credentials!';
//         this.loginInput = { username: '', password: '' }; // clear form values
//         this.isLoggedIn = false;
//       });
//   };
// }


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// export class LoginComponent {

//   loginInput = {
//     username: '',
//     password: ''
//   };

//   welcomeMessage = '';

//   submitLogin = () => {
//     this.welcomeMessage = 'Hi ' + this.loginInput.username + '!';
//     this.loginInput = { username: '', password: '' }; // clear form values
//   };

// }












// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// // export class LoginComponent {

// //   constructor(private http: HttpClient) { }


// //   loginInput = {
// //     username: '',
// //     password: ''
// //   };

// //   welcomeMessage: any = '';

// //   submitLogin = () => {
// //     this.http.post('https://jsonplaceholder.typicode.com/users/', this.loginInput)
// //       .subscribe((resp: any) => {
// //         console.log(resp.username);
// //         this.welcomeMessage = 'Hi ' + resp.username + '!'; //
// //       });
// //     this.loginInput = { username: '', password: '' }; // clear form values 
// //   }

// // }
