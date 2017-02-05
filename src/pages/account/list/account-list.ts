import { Component } from '@angular/core';
import { Wove } from 'aspect.js';
import { NavController, NavParams } from 'ionic-angular';

import { Account } from '../../../models';

import { DatabaseService } from '../../../services';

import { AccountCreatePage, AccountDetailPage } from '../../account';

@Wove()
@Component({
	selector: 'account-list-page',
	templateUrl: 'account-list.html'
})
export class AccountListPage {
	accounts: Account[];

	constructor(
		private db: DatabaseService,
		private navCtrl: NavController,
		private navParams: NavParams,
	) {
		db.getAccounts()
			.subscribe(accounts => this.accounts = accounts);
	};

	accountSelected(account: Account) {
		this.navCtrl.push(AccountDetailPage, {
			account: account,
		});
	};

	createNewAccount() {
		this.navCtrl.push(AccountCreatePage);
	};
}
