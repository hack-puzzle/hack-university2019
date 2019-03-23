import { Component } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	
	eventId = { eventId:''}
	
	constructor(public restService: RestService) {
		if(localStorage.getItem("token")) {
		//	this.isLoggedIn = true;
		}
	}
	
	
	getEvent() {
		
		
		this.restService.getEvent(this.eventId).then((result) => {
			
		}, (err) => {
			
		});
	}
}
