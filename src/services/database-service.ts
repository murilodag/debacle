import { Injectable } from '@angular/core';
import { Wove } from 'aspect.js';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {
	Account
} from '../models';

@Wove()
@Injectable()
export class DatabaseService {

	constructor(private af: AngularFire) {};

	saveObject(firebaseObj: any, path: string): void {
		const key = firebaseObj.$key;
		const replacedPath = path.replace('${key}', key);

		delete firebaseObj.$key;
		delete firebaseObj.$exists;

		this.af.database.object(replacedPath).set(firebaseObj);
	}

	getAccounts(): FirebaseListObservable<Account[]> {
		return this.af.database.list(`/accounts`);
	};
	setAccount(account: Account): void {
		this.saveObject(account, '/accounts/${key}');
	};
	addAccount(account: Account): void {
		this.af.database.list(`/accounts`).push(account);
	};
	removeAccount(account: Account): void {
		this.af.database.object(`/accounts/${account.$key}`).remove();
	};
}
