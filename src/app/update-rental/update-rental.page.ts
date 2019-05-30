import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-update-rental',
  templateUrl: './update-rental.page.html',
  styleUrls: ['./update-rental.page.scss'],
})
export class UpdateRentalPage{

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
