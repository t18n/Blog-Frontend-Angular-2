import { Component, OnInit } from '@angular/core';
import { CustomJavascriptService } from './../custom/customJavaScriptService';

@Component({
  selector: 'app-user-profile-settings',
  templateUrl: './user-profile-settings.component.html',
  styleUrls: ['./user-profile-settings.component.css'],
  viewProviders: [CustomJavascriptService]
})
export class UserProfileSettingsComponent implements OnInit {

  constructor(private jsService: CustomJavascriptService) { }

  ngOnInit() {
    this.jsService.appendToBody('./../../assets/plugins/sky-forms-pro/skyforms/js/jquery-ui.min.js');
    this.jsService.appendToBody('./../../assets/plugins/sky-forms-pro/skyforms/js/jquery.validate.min.js');
    this.jsService.appendToBody('./../../assets/plugins/sky-forms-pro/skyforms/js/jquery.maskedinput.min.js');
    this.jsService.appendToBody('./../../assets/plugins/scrollbar/js/jquery.mCustomScrollbar.concat.min.js');
    this.jsService.appendToBody('./../../assets/js/plugins/datepicker.js');
    this.jsService.appendToBody('./../../assets/js/plugins/style-switcher.js');
    this.jsService.appendToBody('./../../assets/js/forms/checkout.js');
    this.jsService.appendToBody('./../../assets/js/forms/reg.js');
  }

}
