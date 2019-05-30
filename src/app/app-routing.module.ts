import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'existing-rentals', loadChildren: './existing-rentals/existing-rentals.module#ExistingRentalsPageModule' },
  { path: 'new-rental', loadChildren: './new-rental/new-rental.module#NewRentalPageModule' },
  { path: 'update-rental', loadChildren: './update-rental/update-rental.module#UpdateRentalPageModule' },
  { path: 'rental-details', loadChildren: './rental-details/rental-details.module#RentalDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
