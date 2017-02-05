import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {
	LogAspect,
	DatabaseService,
} from '../services';

import { DashboardPage } from '../pages/dashboard/dashboard';
import {
	AccountCreatePage,
	AccountDetailPage,
	AccountEditPage,
	AccountListPage,
} from '../pages';
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
		DashboardPage,
		AccountCreatePage,
		AccountDetailPage,
		AccountEditPage,
		AccountListPage,
		TransactionsPage,
		CreditCardPage,
		BudgetsPage,
		ChartsPage,
		MonthBalancePage,
		CalendarPage,
		TagsPage,
		CategoriesPage,
		SettingsPage,
		HelpPage,
	],
	imports: [
		AngularFireModule.initializeApp(firebaseConfig),
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		DashboardPage,
		AccountCreatePage,
		AccountDetailPage,
		AccountEditPage,
		AccountListPage,
		TransactionsPage,
		CreditCardPage,
		BudgetsPage,
		ChartsPage,
		MonthBalancePage,
		CalendarPage,
		TagsPage,
		CategoriesPage,
		SettingsPage,
		HelpPage,
	],
	providers: [
		LogAspect,
		DatabaseService,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
	]
})
export class AppModule {}
