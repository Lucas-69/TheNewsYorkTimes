import { Component, OnInit } from '@angular/core';
import { NewTimesService } from 'src/app/services/new-times.service';
import { Article } from '../../interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public articles: Article[] = [];

  constructor(private newService: NewTimesService) {}

  ngOnInit() {
    this.newService.getTopHeadlies()
      .subscribe( articles  => this.articles.push(...articles) );
  }
  
}
