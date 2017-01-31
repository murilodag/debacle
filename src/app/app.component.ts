import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { AccountsPage } from '../pages/accounts/accounts';
import { TransactionsPage } from '../pages/transactions/transactions';
import { CreditCardPage } from '../pages/credit-card/credit-card';
import { BudgetsPage } from '../pages/budgets/budgets';
import { ChartsPage } from '../pages/charts/charts';
import { MonthBalancePage } from '../pages/month-balance/month-balance';
import { CalendarPage } from '../pages/calendar/calendar';
import { TagsPage } from '../pages/tags/tags';
import { CategoriesPage } from '../pages/categories/categories';
import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = DashboardPage;

	pages: Array<{title: string, component: any}>;

	constructor(public platform: Platform) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Dashboard', component: DashboardPage },
			{ title: 'Accounts', component: AccountsPage },
			{ title: 'Transactions', component: TransactionsPage },
			{ title: 'Credit Card', component: CreditCardPage },
			{ title: 'Budgets', component: BudgetsPage },
			{ title: 'Charts', component: ChartsPage },
			{ title: 'Month Balance', component: MonthBalancePage },
			{ title: 'Calendar', component: CalendarPage },
			{ title: 'Tags', component: TagsPage },
			{ title: 'Categories', component: CategoriesPage },
			{ title: 'Settings', component: SettingsPage },
			{ title: 'Help', component: HelpPage },
		];

	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();
			Splashscreen.hide();
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}
}
