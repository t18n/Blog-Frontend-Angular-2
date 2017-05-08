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
  constructor() { }

  ngOnInit() {
  }
  public subscribeEmail(){
    SUBSCRIBEDEMAILS.push({
      email : this.toSubscribe
    });
    console.log(SUBSCRIBEDEMAILS);
  }

  showModal(){
    $('#myModal').modal('show');
  }
  
}


      
