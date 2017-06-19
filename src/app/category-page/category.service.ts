import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

@Injectable()
export class CategoryService {
  constructor(private http: Http) { }
  /**
   * Gets the list of all articles
   */
  public getCategories() {
    return this.http.get(environment.apiRoute + 'categories')
      .map(res => res.json().data);
  }

  public getPostsByCategory(cat_id) {
    return this.http.get(environment.apiRoute + 'categories/' + cat_id)
      .map(res => res.json().data);
  }

  public getPostsBySubCategory(cat_id) {
    return this.http.get(environment.apiRoute + 'subcategories/' + cat_id)
      .map(res => res.json().data);
  }
}