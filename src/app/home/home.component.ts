import { Component, OnInit } from '@angular/core';
import { Article } from './../article/article';
import { ArticleService } from './../article/article.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  //public articles: Article[];
  public articles: Article[];
  public error: string;
  public numOfArticles: number;
  public numOfPages: number[];
  public sliceStart: number = 0;
  public sliceEnd: number = 6;
  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  public getArticles() {
    this.articleService.getArticles().subscribe(
      data => {
        this.articles = data;
        this.numOfArticles = this.articles.length;
        let page = Math.ceil(this.numOfArticles / 6);
        this.numOfPages = new Array(page);
        error => this.error = error.json().error;

      }
    );
  }

  public changePage(i) {
    this.sliceStart = i * 6;
    this.sliceEnd = this.sliceStart + 6;
  }


}