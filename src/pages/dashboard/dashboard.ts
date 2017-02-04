import { Component } from '@angular/core';
import { Wove } from 'aspect.js';

import { NavController } from 'ionic-angular';
import { DatabaseService } from '../../services/database-service';


@Wove()
@Component({
	selector: 'dashboard-page',
	templateUrl: 'dashboard.html'
})
export class DashboardPage {
	constructor(public navCtrl: NavController, private dbService: DatabaseService) {
	}
}
