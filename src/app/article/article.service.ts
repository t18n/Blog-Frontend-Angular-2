import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from '../../environments/environment';

@Injectable()
export class ArticleService { 
constructor(private http: Http) { }
  /**
   * Gets the list of all articles
   */
  public getArticles() {
   return this.http.get(environment.apiRoute + 'posts')
      .map(res => res.json().data);
  }

  public getArticle(id){
   return this.http.get( environment.apiRoute + 'posts/' + id)
      .map(res => res.json().data);
  }
}