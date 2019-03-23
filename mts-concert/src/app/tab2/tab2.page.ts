import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
	
	picture : any;
	
	constructor(private cameraPreview: CameraPreview, private cameraPreviewOptions: CameraPreviewOptions, private pictureOpts: CameraPreviewPictureOptions) {
		cameraPreviewOptions = {
		  x: 0,
		  y: 0,
		  width: window.screen.width,
		  height: window.screen.height,
		  camera: 'rear',
		  tapPhoto: true,
		  previewDrag: true,
		  toBack: true,
		  alpha: 1
		}
		pictureOpts = {
		  width: 1280,
		  height: 1280,
		  quality: 85
		}
	}
	
	ionViewWillEnter(){
			this.cameraPreview.startCamera(this.cameraPreviewOptions).then(
			(res) => {
				console.log(res)
			},
			(err) => {
				console.log(err)
			});
		}
	
	take() {
		this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
		  this.picture = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
		  console.log(err);
		  this.picture = 'assets/img/test.jpg';
		});
	}
	
	toggleFlashLight() {
		
	}
	
}
