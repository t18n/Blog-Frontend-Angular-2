import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Article } from './../article/article';
import { ArticleService } from './../article/article.service';
import { UserInfo } from './../user/userinfo';
import { UserService } from './../user/user.service';
import { AppComponent } from './../app.component';

declare var $: any;

@Component({
  selector: 'app-singlearticle',
  templateUrl: './singlearticle.component.html',
  styleUrls: ['./singlearticle.component.css'],
  providers: [ArticleService, UserService]
})
export class SinglearticleComponent implements OnInit {

  public userinfo: UserInfo = new UserInfo();
  public article: Article = new Article();
  public articleuser: string;
  public liked: boolean = false;
  public likes: Array<{name: string}>;
  public content_id: string;
  public error: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private userService: UserService,
    private app: AppComponent) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.content_id = (params['id']);
      this.getArticle();
    });

    this.getUserInfo();

  }

  public getArticle() {
    this.articleService.getArticle(this.content_id).subscribe(
      data => {
        this.article = data;
        this.likes = data.likes.data;
        this.articleuser = data.user.data.name;
        error => this.error = error.json().error;
      }
    );
  }

  checklike(){
    for(let i = 0; i<this.likes.length; i++){
      if(this.likes[i].name = this.userinfo.name){
        this.liked = true;
      }
    }
  }

  public likeArticle(article_id) {
    this.articleService.likeArticle(article_id).subscribe(
      data => {
        this.getArticle();
      }
    );
  }

  public getUserInfo() {
    if (this.app.isLoggedIn == true) {
      this.userService.getUserInfo().subscribe(
        data => {
          this.userinfo = data;
          this.checklike();
          error => this.error = error.json().error;
        }
      );
    }
  }
}
