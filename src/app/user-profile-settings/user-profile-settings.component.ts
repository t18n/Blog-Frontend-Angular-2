import { Component, OnInit } from '@angular/core';
import { CustomJavascriptService } from './../custom/customJavaScriptService';
import { UserService } from './../user/user.service';
import { UserInfo } from './../user/userinfo';

@Component({
  selector: 'app-user-profile-settings',
  templateUrl: './user-profile-settings.component.html',
  styleUrls: ['./user-profile-settings.component.css'],
  viewProviders: [CustomJavascriptService],
  providers: [UserService]
})
export class UserProfileSettingsComponent implements OnInit {


  public userinfo: UserInfo = new UserInfo();
  public error: string;

  constructor(private jsService: CustomJavascriptService,
              private userService: UserService) { }

  ngOnInit() {
    this.jsService.appendToBody('./../../assets/plugins/sky-forms-pro/skyforms/js/jquery-ui.min.js');
    this.jsService.appendToBody('./../../assets/plugins/sky-forms-pro/skyforms/js/jquery.validate.min.js');
    this.jsService.appendToBody('./../../assets/plugins/sky-forms-pro/skyforms/js/jquery.maskedinput.min.js');
    this.jsService.appendToBody('./../../assets/plugins/scrollbar/js/jquery.mCustomScrollbar.concat.min.js');
    this.jsService.appendToBody('./../../assets/js/plugins/datepicker.js');
    this.jsService.appendToBody('./../../assets/js/forms/checkout.js');
    this.jsService.appendToBody('./../../assets/js/forms/reg.js');
    this.getUserInfo();
  }

  public getUserInfo() {
    this.userService.getUserInfo().subscribe(
      data => {
        this.userinfo = data;
        error => this.error = error.json().error;
      }
    );
  }

}
