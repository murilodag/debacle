import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
	apiKey: "AIzaSyCVL1WVF0QxERlx355yQDPp9Vj-qOYs5YA",
	authDomain: "debacle-bd1f4.firebaseapp.com",
	databaseURL: "https://debacle-bd1f4.firebaseio.com",
	storageBucket: "debacle-bd1f4.appspot.com",
	messagingSenderId: "905273099239"
};

@NgModule({
	declarations: [
		MyApp,
		Page1,
		Page2
	],
	imports: [
		AngularFireModule.initializeApp(firebaseConfig),
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		Page1,
		Page2
	],
	providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
