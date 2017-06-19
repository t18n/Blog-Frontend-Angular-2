import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from '../../environments/environment';

@Injectable()
export class TagService { 
constructor(private http: Http) { }
  /**
   * Gets the list of all tag
   */
  public getTags() {
   return this.http.get( environment.apiRoute + 'tags')
      .map(res => res.json());
  }
}