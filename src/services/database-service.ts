import { Injectable } from '@angular/core';
import { Wove } from 'aspect.js';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AngularFire } from 'angularfire2';

@Wove()
@Injectable()
export class DatabaseService {

	constructor(private af: AngularFire) {
		console.debug('database-service:init(): angular fire', af);
	};

	/**
	* Returns some stuff
	*/
	myStuff(): any {
		return 'stuff';
	};

	/**
	* Returns something wrapper around a promise
	*/
	getMeSomething(): Promise<any> {
		return Promise.resolve('something from server');
	};

}
