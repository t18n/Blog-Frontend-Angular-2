import { Component, OnInit } from '@angular/core';
import { UserService } from './../user/user.service';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css'],
  providers: [UserService]
})
export class LeftsidebarComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  logout(){
    this.userService.logout();
  }

}
