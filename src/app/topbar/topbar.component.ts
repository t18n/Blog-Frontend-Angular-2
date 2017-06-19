import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserInfo } from './../user/userinfo';
import { UserService } from './../user/user.service';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  providers: [UserService]
})
export class TopbarComponent implements OnInit {

  public userinfo: UserInfo = new UserInfo();
  public error: string;
  constructor(public app: AppComponent,
              private userService: UserService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  public getUserInfo() {
    if (this.app.isLoggedIn == true) {
      this.userService.getUserInfo().subscribe(
        data => {
          this.userinfo = data;
          error => this.error = error.json().error;
        }
      );
    }
  }
}
