import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage{

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
