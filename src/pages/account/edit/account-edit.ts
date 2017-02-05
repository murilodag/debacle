import { Component } from '@angular/core';
import { Wove } from 'aspect.js';
import { NavController, NavParams } from 'ionic-angular';

import { Account } from '../../../models';

import {
	DatabaseService
} from '../../../services';

@Wove()
@Component({
	selector: 'account-edit-page',
	templateUrl: 'account-edit.html'
})
export class AccountEditPage {
	account: Account;
	// TODO: calculate initial value based on diff of current value and new value
	newAccountValue: number;

	constructor(
		private db: DatabaseService,
		private navCtrl: NavController,
		private navParams: NavParams,
	) {
		this.account = this.navParams.get('account');
	};

	saveAccount() {
		this.db.setAccount(this.account);
		this.navCtrl.pop();
	}
}
