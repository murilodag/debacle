import { Component } from '@angular/core';
import { Wove } from 'aspect.js';
import { NavController, NavParams } from 'ionic-angular';

import { DatabaseService } from './../../../services'
import { Account } from '../../../models';

@Wove()
@Component({
	selector: 'account-create-page',
	templateUrl: 'account-create.html'
})
export class AccountCreatePage {
	account: Account = new Account();

	constructor(
		private db: DatabaseService,
		private navCtrl: NavController,
		private navParams: NavParams,
	) {
	};

	saveNewAccount() {
		this.db.addAccount(this.account);
		this.navCtrl.pop();
	};
}
