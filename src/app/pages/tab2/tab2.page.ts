import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public categories: string[] = ['business', 'entertainment', 'general', 'health', 'sciences', 'ports','technology'];

  public selectedCategory: string = this.categories[0];
  
  constructor() {}

  segmentChanged( category: any){
    console.log(category);
  }
}
