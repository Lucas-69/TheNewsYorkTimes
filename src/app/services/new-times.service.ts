import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Article, NewsResponse } from '../interfaces';
import { Observable, map } from 'rxjs';

const apiKey = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class NewTimesService {

  constructor( private http: HttpClient) { }

  getTopHeadlies():Observable<Article[]> {
    
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/everything?domains=wsj.com`, {
      params: { apiKey }
    }).pipe(
      map(({ articles }) => articles)
    );
  }

}
