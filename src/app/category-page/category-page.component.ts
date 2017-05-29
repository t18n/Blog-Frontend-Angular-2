import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CustomJavascriptService } from './../custom/customJavaScriptService';
import { CategoryService } from './../category-page/category.service';
import { Article } from './../article/article'

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
  viewProviders: [CustomJavascriptService, CategoryService]
})
export class CategoryPageComponent implements OnInit {
  public articles: Article[];
  public category_id: string;
  public category_name:string; 
  public numOfArticles: number;
  public numOfPages: number[];
  public sliceStart: number = 0;
  public sliceEnd: number = 6;

  constructor(
    private route: ActivatedRoute,
    private jsService: CustomJavascriptService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category_id = (params['cat_id']);
      this.getArticlesByCategory();
      if (this.category_id !== '') {
      }
    });

  }

  getArticlesByCategory() {
    this.articles = null;
    this.categoryService.getPostsByCategory(this.category_id).subscribe(
      data => {
        this.articles = data.posts.data;
        this.category_name = data.name;
        this.numOfArticles = this.articles.length;
        let page = Math.ceil(this.numOfArticles / 6);
        this.numOfPages = new Array(page);
      }
    );
  }

  public changePage(i) {
    this.sliceStart = i * 6;
    this.sliceEnd = this.sliceStart + 6;
  }

}
