import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav } from '@ionic/angular';

export interface PageInterface{
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  rootPage = 'HomePage';
  
  @ViewChild(Nav) nav: Nav;
  
  /*
  pages: PageInterface[] = [
    { title: 'Home', pageName: 'HomePage'},
    { title: 'Sleepiness', pageName: 'SleepinessPage'},
    { title: 'Home', pageName: 'HomePage'}
  ]
  */

  constructor() { }

  ngOnInit() {
  }
  
  openPage(page: PageInterface){
    
  }
  
  isActive(page: PageInterface){
  
  }

}
