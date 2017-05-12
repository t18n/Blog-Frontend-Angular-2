import { Component, OnInit } from '@angular/core';
import { SUBSCRIBEDEMAILS } from './../mail/maildata'

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public toSubscribe: string;
  public checkhome: any;
  constructor() { }

  ngOnInit() {
    this.checkhome = document.getElementsByClassName('showthisheader').length;
    console.log(this.checkhome);
  }

  
  public subscribeEmail(){
    SUBSCRIBEDEMAILS.push({
      email : this.toSubscribe
    });
    console.log(SUBSCRIBEDEMAILS);
  }

}


      
