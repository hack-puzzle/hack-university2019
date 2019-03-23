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
	time : any;

	screenOrientationType = this.screenOrientationService.screenOrientation.type;
	
	constructor(public restService: RestService, private screenOrientationService: ScreenOrientationService) {
		if(localStorage.getItem("token")) {
		//	this.isLoggedIn = true;
		}

		this.screenOrientationService.screenOrientation.onChange().subscribe(() => {
			this.screenOrientationType = this.screenOrientationService.screenOrientation.type;
		});
	}
	
	
	getEvent() {
		
		
		this.restService.getEvent(this.eventId).then((result) => {
			this.time = result;
		}, (err) => {
			
		});
	}

	changeOrientation() {
		this.screenOrientationService.screenOrientation.lock(this.screenOrientationService.screenOrientation.ORIENTATIONS.LANDSCAPE);
	}
}
