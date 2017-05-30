import { Component, OnInit } from '@angular/core';
import { SUBSCRIBEDEMAILS } from './../mail/maildata'
import { AppComponent } from './../app.component';
import { UserService } from './../user/user.service';
import { UserInfo } from './../user/userinfo';
import { CategoryService } from './../category-page/category.service'
declare var $: any;

@Component({
  selector: 'header-primary',
  templateUrl: './header-primary.component.html',
  styleUrls: ['./header-primary.component.css'],
  providers: [UserService, CategoryService]
})
export class HeaderPrimaryComponent implements OnInit {

  public userinfo: UserInfo = new UserInfo();
  public error: string;
  public toSubscribe: string;
  public checkhome: any;
  public categories: any;
  constructor(
    private app: AppComponent,
    private userService: UserService,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
    if (this.app.isLoggedIn == false) {
      if (localStorage.getItem('authToken') != '') {
        this.app.isLoggedIn = true;
      }
    }
    this.getUserInfo();
  }

  public getUserInfo() {
    if (this.app.isLoggedIn == true) {
      this.userService.getUserInfo().subscribe(
        data => {
          this.userinfo = data;
          error => this.error = error.json().error;
        }
      );
    }
  }

  public getCategories(){
    this.categoryService.getCategories().subscribe(
        data => {
          this.categories = data;
          error => this.error = error.json().error;
        }
      );
  }

  public subscribeEmail() {
    SUBSCRIBEDEMAILS.push({
      email: this.toSubscribe
    });
  }

}



