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

  public articles: Article[];
  public error: string;

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  public getArticles() {
      this.articleService.getArticles().subscribe(
      data => this.articles = data,
      error => this.error = error.json().error
    );
  }
}

