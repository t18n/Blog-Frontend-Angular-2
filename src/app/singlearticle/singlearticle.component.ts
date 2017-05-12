import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Article } from './../article/article';
import { ArticleService } from './../article/article.service';

declare var $: any;

@Component({
  selector: 'app-singlearticle',
  templateUrl: './singlearticle.component.html',
  styleUrls: ['./singlearticle.component.css'],
  providers: [ArticleService]
})
export class SinglearticleComponent implements OnInit {

  public article: Article = new Article();
  public content_id: string;
  public error: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.content_id = (params['id']);
      this.getArticle();
    });

  }

  public getArticle() {
    this.articleService.getArticle(this.content_id).subscribe(
      data => {
        this.article = data;
        error => this.error = error.json().error;
      }
    );
  }
}
