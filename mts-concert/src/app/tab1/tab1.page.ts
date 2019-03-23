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

//$(document).ready(function(){
//$("#menu").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
//event.preventDefault();
//забираем идентификатор бока с атрибута href
//var id  = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
//top = $(id).offset().top;
//анимируем переход на расстояние - top за 1500 мс
//$('body,html').animate({scrollTop: top}, 1500);});});

