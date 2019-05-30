import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-rental',
  templateUrl: './new-rental.page.html',
  styleUrls: ['./new-rental.page.scss'],
})
export class NewRentalPage {

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
