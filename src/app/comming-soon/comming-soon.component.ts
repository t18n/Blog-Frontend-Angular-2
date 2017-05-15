import { Component, OnInit } from '@angular/core';
import { CustomJavascriptService } from './../custom/customJavaScriptService';

@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.css'],
  viewProviders: [CustomJavascriptService]
})
export class CommingSoonComponent implements OnInit {

  constructor(private jsService: CustomJavascriptService) { }

  ngOnInit() {
    this.jsService.appendToBody('./../../assets/plugins/countdown/jquery.plugin.js');
    this.jsService.appendToBody('./../../assets/plugins/countdown/jquery.countdown.js');
    this.jsService.appendToBody('./../../assets/plugins/wow-animations/js/wow.min.js');
    this.jsService.appendToBody('./../../assets/js/pages/page_coming_soon.js');
  }

}
