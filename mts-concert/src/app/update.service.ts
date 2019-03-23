import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
	
	startTime: any;
	notificationList: any;
	currentSongId: any;

	constructor() { }
  
	update(data) {
		this.startTime = data.startTime;
		this.notificationList = data.notificationList;
		this.currentSongId = data.currentSongId;
		console.log(data);
	}
}
