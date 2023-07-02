import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedInUserData: any = {};
  randomBlogId: number = 100;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.loggedInUserData = this.userService.getUserData();
    console.log(this.loggedInUserData);

    setInterval(() => {
      this.randomBlogId = Math.floor((Math.random() * 100) + 1);
    }, 60000);
  };

}
