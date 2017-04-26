import { Component, OnInit } from '@angular/core';

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
  
}

var SUBSCRIBEDEMAILS = [
      {
        "email":"sarojadhikarix@gmail.com"
      }]
      
