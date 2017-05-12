import { Component, OnInit } from '@angular/core';
import { SUBSCRIBEDEMAILS } from './../mail/maildata'

declare var $: any;

@Component({
  selector: 'header-primary',
  templateUrl: './header-primary.component.html',
  styleUrls: ['./header-primary.component.css']
})
export class HeaderPrimaryComponent implements OnInit {

  public toSubscribe: string;
  public checkhome: any;
  constructor() { }

  ngOnInit() {
  }

  
  public subscribeEmail(){
    SUBSCRIBEDEMAILS.push({
      email : this.toSubscribe
    });
    console.log(SUBSCRIBEDEMAILS);
  }

}


      
