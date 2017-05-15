import { Component, OnInit } from '@angular/core';
import { CustomJavascriptService } from './../custom/customJavaScriptService';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  viewProviders: [CustomJavascriptService]
})
export class ContactUsComponent implements OnInit {

  constructor(private jsService: CustomJavascriptService) { }

  ngOnInit() {
    this.jsService.appendToBody('./../../assets/plugins/owl-carousel/owl-carousel/owl.carousel.js');
    this.jsService.appendToBody('./../../assets/plugins/sky-forms-pro/skyforms/js/jquery.form.min.js');
    this.jsService.appendToBody('./../../assets/plugins/sky-forms-pro/skyforms/js/jquery.validate.min.js');
    this.jsService.appendToBody('//maps.googleapis.com/maps/api/js?key=AIzaSyCDSb3wORiw36c9kGhpSVqjkTYtJpVp4l4&callback=initMap');
    this.jsService.appendToBody('./../../assets/js/forms/login.js');
    this.jsService.appendToBody('./../../assets/js/forms/contact.js');
    this.jsService.appendToBody('./../../assets/js/plugins/google-map.js');
    this.jsService.appendToBody('./../../assets/js/plugins/owl-carousel.js');

  }

}
