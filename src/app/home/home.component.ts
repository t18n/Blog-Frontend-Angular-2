import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Article } from './article';
import { ARTICLESDATA } from './articledata';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  public articles: Article[];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  public getArticles() {
    this.articles = JSON.parse(JSON.stringify(ARTICLESDATA));
  }
}

