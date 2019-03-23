import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

	const httpOptions = {
		headers: new HttpHeaders({'Content-Type': 'application/json'})
	};
	
	const apiUrl = 'https://smth';

@Injectable({
	providedIn: 'root'
})
export class RestService {

	constructor(public http: HttpClient) { }
  
	getEvent(id) {
		return new Promise((resolve, reject) => {
			this.http.get(apiUrl+"/events/"+id)
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
