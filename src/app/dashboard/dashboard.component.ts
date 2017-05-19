import { Component, OnInit } from '@angular/core';
import { CustomJavascriptService } from './../custom/customJavaScriptService';
import { AppComponent } from './../app.component';
import { UserService } from './../user/user.service';
import { UserInfo } from './../user/userinfo'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  viewProviders: [CustomJavascriptService],
  providers: [UserService]
})
export class DashboardComponent implements OnInit {

  public userinfo: UserInfo;
  public error: string;
  
  constructor(private jsService: CustomJavascriptService,
              private app: AppComponent,
              private userService: UserService,) { }

  ngOnInit() {
    this.jsService.appendToBody('./../../assets/plugins/counter/waypoints.min.js');
    this.jsService.appendToBody('./../../assets/plugins/counter/jquery.counterup.min.js');
    this.jsService.appendToBody('./../../assets/plugins/sky-forms-pro/skyforms/js/jquery-ui.min.js');
    this.jsService.appendToBody('./../../assets/plugins/scrollbar/js/jquery.mCustomScrollbar.concat.min.js');
    this.jsService.appendToBody('./../../assets/js/plugins/datepicker.js');
    this.getUserInfo();
  }

    public getUserInfo() {
    this.userService.getUserInfo().subscribe(
      data => {
        this.userinfo = data;
        console.log(this.userinfo);
        error => this.error = error.json().error;
      }
    );
  }

}
