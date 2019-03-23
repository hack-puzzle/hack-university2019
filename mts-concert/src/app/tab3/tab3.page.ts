import {Component, Input} from '@angular/core';
import { RestService } from '../rest.service';
import {ScreenOrientationService} from "../services/screen-orientation.service";

@Component({
	selector: 'app-tab3',
	templateUrl: 'tab3.page.html',
	styleUrls: ['tab3.page.scss'],
	providers: [
		ScreenOrientationService,
		ScreenOrientation
	]
})
export class Tab3Page {

	eventId = { eventId:''};
	startTime : any;
	
	secondsRemaining
	displayTime
	hasFinished : boolean = false;

	// screenOrientationType = this.screenOrientationService.screenOrientation.type;
	
	constructor(public restService: RestService, private screenOrientationService: ScreenOrientationService) {
		if(localStorage.getItem("token")) {
		//	this.isLoggedIn = true;
		}

	//	this.screenOrientationService.screenOrientation.onChange().subscribe(() => {
	//		this.screenOrientationType = this.screenOrientationService.screenOrientation.type;
	//	});
		

	}
	
	
	getEvent() {
		this.restService.getEvent(this.eventId).then((result) => {
			this.startTime = result;
			this.startTime = this.startTime.time;
			this.secondsRemaining = (Date.parse(this.startTime) - Date.now()) / 1000;
			this.secondsRemaining = (Date.parse("2019-03-23T17:57:00") - Date.now()) / 1000;
			this.timerTick();
		}, (err) => {
		});
	}

	
	timerTick() {
		setTimeout(() => {
            this.secondsRemaining--;
            this.displayTime = this.getSecondsAsDigitalClock(this.secondsRemaining);
            if (this.secondsRemaining > 0) {
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
	
	changeOrientation() {
		this.screenOrientationService.screenOrientation.lock(this.screenOrientationService.screenOrientation.ORIENTATIONS.LANDSCAPE);
	}
}
