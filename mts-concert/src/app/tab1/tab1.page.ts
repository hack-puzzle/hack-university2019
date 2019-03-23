import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	
	eventId = { eventId:''}
	
	startTime : any;
	
	secondsRemaining;
	displayTime;
	hasFinished : boolean = false;
	
	constructor(public restService: RestService, public updateService: UpdateService) {
		if(localStorage.getItem("token")) {
		//	this.isLoggedIn = true;
		}
	}
	
	ionViewWillEnter(){
		if (this.startTime == undefined) {
		//	this.getEvent();
		//	this.getData();
			if (this.updateService.startTime != undefined) {
				this.startTime = this.updateService.startTime;
				this.secondsRemaining = (Date.parse(this.startTime) - Date.now()) / 1000;
				this.timerTick();
			}			
			console.log("hohoho");
			this.logTime();
		} else if (this.startTime != this.updateService.startTime) {
			this.startTime = this.updateService.startTime;
			this.secondsRemaining = (Date.parse(this.startTime) - Date.now()) / 1000;
			console.log("Changed!!!");
			this.timerTick();
		}
	}
	
	logTime() {
		setTimeout(() => {
			console.log("hehehe " + this.startTime + " " + this.displayTime);
			this.logTime();
        }, 5000);		
	}
	
	getEvent() {
		this.restService.getEvent(this.eventId).then((result) => {
			this.startTime = result;
			this.startTime = this.startTime.time;
			this.secondsRemaining = (Date.parse(this.startTime) - Date.now()) / 1000;
		//	this.secondsRemaining = (Date.parse("2019-03-23T18:57:00") - Date.now()) / 1000;
			this.timerTick();
		}, (err) => {
		});
	}
	
	timerTick() {
		setTimeout(() => {
			if (this.secondsRemaining > 0) {
				this.secondsRemaining--;
				this.displayTime = this.getSecondsAsDigitalClock(this.secondsRemaining);
                this.timerTick();
            }
            else {
                this.hasFinished = true;
            }
        }, 1000);
	}
	
	getSecondsAsDigitalClock(inputSeconds: number) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    }
}
