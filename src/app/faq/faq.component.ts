import { Component, OnInit } from '@angular/core';
import { CustomJavascriptService } from './../custom/customJavaScriptService';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  viewProviders: [CustomJavascriptService]
})
export class FaqComponent implements OnInit {

  constructor(private jsService: CustomJavascriptService) { }

  ngOnInit() {
    this.jsService.appendToBody('./../../assets/plugins/jquery.parallax.js');
    this.jsService.appendToBody('./../../assets/plugins/counter/waypoints.min.js');
    this.jsService.appendToBody('./../../assets/plugins/counter/jquery.counterup.min.js');
    this.jsService.appendToBody('./../../assets/js/pages/page_contacts.js');
  }

}
