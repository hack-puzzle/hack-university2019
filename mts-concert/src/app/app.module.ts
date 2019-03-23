import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { RestService } from './rest.service'; // Do need?
import { UpdateService } from './update.service'; // Do need?
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ScreenOrientationService } from "./services/screen-orientation.service";

@NgModule({
  declarations: [
      AppComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
      StatusBar,
      SplashScreen,
	  UpdateService,
      RestService, // Do need?
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      ScreenOrientation,
      ScreenOrientationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
