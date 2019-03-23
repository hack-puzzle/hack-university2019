import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

	const httpOptions = {
		headers: new HttpHeaders({'Content-Type': 'application/json'})
	};
	
	const apiUrl = 'http://hack-university-server.herokuapp.com/';

@Injectable({
	providedIn: 'root'
})
export class RestService {

	constructor(public http: HttpClient) { }
  
	getEvent(id) {
		return new Promise((resolve, reject) => {
			// let headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
			this.http.get(apiUrl+"concert-start")
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
