import { Component } from '@angular/core';
import { Wove } from 'aspect.js';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Account } from '../../../models';

import {
	DatabaseService
} from '../../../services';

import { AccountEditPage } from '../../../pages';

@Wove()
@Component({
	selector: 'account-detail-page',
	templateUrl: 'account-detail.html'
})
export class AccountDetailPage {
	account: Account;

	constructor(
		private db: DatabaseService,
		private navCtrl: NavController,
		private navParams: NavParams,
		private alertCtrl: AlertController,
	) {
		this.account = this.navParams.get('account') || new Account();
	};

	editAccount() {
		this.navCtrl.push(AccountEditPage, {
			account: this.account
		});
	};

	deleteAccount() {
		this.alertCtrl.create(
			{
				title: `Are you sure you want to delete?`,
				message: `The account ${this.account.name} CANNOT be recovered later!`,
				buttons: [
					{
						text: 'Cancel',
					},
					{
						text: 'Delete',
						handler: () => {
							this.db.removeAccount(this.account);
							this.navCtrl.pop();
						}
					}
				]
			}
		).present();
	};
}
