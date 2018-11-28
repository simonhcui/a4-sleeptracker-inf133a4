import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { SleepService } from '../../services/sleep.service';
import { SleepData } from '../../data/sleep-data';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.page.html',
  styleUrls: ['./fourth.page.scss'],
})
export class FourthPage implements OnInit {

  sData1:OvernightSleepData[];
  textOvernight:string;
  
  sStrings:string[];
  service:SleepService;

  constructor(private menu: MenuController, public sleepService:SleepService) {
    this.service = new SleepService();
  }

  ngOnInit() {
		console.log(this.allSleepData);
	}
	
	get allSleepData() {
		return SleepService.AllSleepData;
	}

  get allOvernightData(){
    return SleepService.AllOvernightData;
  }
  
  btnClicked1(){
    this.sData1 = this.allOvernightData;
    this.sStrings = [];
    
    this.textOvernight = "";
    
    for(let i = 0; i < this.sData1.length; i++){
      //this.textOvernight += this.sData1[i].dateString();
      //this.textOvernight += "\n";
      
      this.sStrings.push(this.sData1[i].dateString());
      this.sStrings.push(this.sData1[i].summaryString());
    }
  }

}
