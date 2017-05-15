import { Component, OnInit } from '@angular/core';
import { CustomJavascriptService } from './../custom/customJavaScriptService';
@Component({
  selector: 'app-user-public-profile',
  templateUrl: './user-public-profile.component.html',
  styleUrls: ['./user-public-profile.component.css'],
  viewProviders: [CustomJavascriptService]
})
export class UserPublicProfileComponent implements OnInit {

  constructor(private jsService: CustomJavascriptService) { }

  ngOnInit() {
    this.jsService.appendToBody('./../../assets/plugins/counter/waypoints.min.js');
    this.jsService.appendToBody('./../../assets/plugins/counter/jquery.counterup.min.js');
    this.jsService.appendToBody('./../../assets/plugins/sky-forms-pro/skyforms/js/jquery-ui.min.js');
    this.jsService.appendToBody('./../../assets/plugins/scrollbar/js/jquery.mCustomScrollbar.concat.min.js');
    this.jsService.appendToBody('./../../assets/js/plugins/datepicker.js');
    this.jsService.appendToBody('./../../assets/js/plugins/style-switcher.js');
  }

}
