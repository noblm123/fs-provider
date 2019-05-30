import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-existing-rentals',
  templateUrl: './existing-rentals.page.html',
  styleUrls: ['./existing-rentals.page.scss'],
})
export class ExistingRentalsPage {

  constructor(private navCtrl: NavController) { }
  
  navToNewRental() {
    this.navCtrl.navigateForward("new-rental");
  }
  navToRentalDetails() {
    this.navCtrl.navigateForward("rental-details");
  }
  navToUpdateRental() {
    this.navCtrl.navigateForward("update-rental");
  }
  navToExistingRentals() {
    this.navCtrl.navigateForward("existing-rentals");
  }


}
