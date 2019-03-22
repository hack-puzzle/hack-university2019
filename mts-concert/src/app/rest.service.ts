import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class RestService {
	
	const httpOptions = {
		headers: new HttpHeaders({'Content-Type': 'application/json'})
	};
	
	apiUrl = 'https://smth';

	constructor(public http: HttpClient) { }
  
	getEvent(id) {
		return new Promise((resolve, reject) => {
			this.http.get(this.apiUrl+"/events/"+id)
				.subscribe(res => {					
					console.log(res); // log
					resolve(res);
				}, (err) => {
					console.log(err); // log
					reject(err);
				});
		});
	}
}
