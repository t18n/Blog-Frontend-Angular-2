import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
//import { HttpClient } from './../HttpClient';
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
    return this.http.get('http://api.sowable.com/posts')
      .map(res => res.json().data);
  }
}