import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
//import { HttpClient } from './../HttpClient';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeService {

  //constructor(private http: HttpClient) { }
  constructor() { }
  /**
   * Gets the list of all articles
   */
  public getArticles() {
    //return this.http.get(environment.apiRoute + this.module + 'index', { search: requestOptions })
    //  .map(res => res.json().data as Opportunity[]);
  }
}
