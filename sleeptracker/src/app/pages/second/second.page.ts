import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { SleepService } from '../../services/sleep.service';
import { SleepData } from '../../data/sleep-data';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';

@Component({
  selector: 'app-second',
  templateUrl: 'second.page.html',
  styleUrls: ['second.page.scss'],
})
export class SecondPage implements OnInit {

  score:number;
  service;

  constructor(private menu: MenuController, public sleepService:SleepService) {
    this.service = new SleepService();
  }

  ngOnInit() {
		console.log(this.allSleepData);
	}
	
	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	openMenu(){
    this.menu.open();
  }
  
  btnClicked(){
	  var s = new StanfordSleepinessData(this.score);
	  this.service.logSleepinessData(s);
	}

}
