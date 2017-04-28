import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Article } from './../article/article';
import { ARTICLESDATA } from './../article/articledata';

declare var $: any;

@Component({
  selector: 'app-singlearticle',
  templateUrl: './singlearticle.component.html',
  styleUrls: ['./singlearticle.component.css']
})
export class SinglearticleComponent implements OnInit {

  public article: Article;
  public articlePrev: Article;
  public articleNext: Article;
  public content_id: string;
  public shareTo: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.content_id = (params['id']);
      this.getArticle();
    });

  }

  public getArticle() {
    for (var i = 0; i < ARTICLESDATA.length; ++i) {
      if (ARTICLESDATA[i].id === this.content_id) {
        this.article = ARTICLESDATA[i];
        this.articlePrev = ARTICLESDATA[i - 1];
        this.articleNext = ARTICLESDATA[i + 1];
      }
    }
  }

  public showShare(platform) {
    this.shareTo = platform;
    $('#myModal').modal('show');
  }


}
