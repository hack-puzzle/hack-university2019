import { Component } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
	
	eventId = { eventId:''}
	time : any;
	
	constructor(public restService: RestService) {
		if(localStorage.getItem("token")) {
		//	this.isLoggedIn = true;
		}
	}
	
	
	getEvent() {
		
		
		this.restService.getEvent(this.eventId).then((result) => {
			this.time = result;
		}, (err) => {
			
		});
	}
}
