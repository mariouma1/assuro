import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from '../hello.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { WelcomPageComponent } from '../BodyComponent/welcom-page/welcom-page.component';

const routes: Routes = [
  { path: 'welcom', component: WelcomPageComponent },
  { path: '', redirectTo: '/welcom', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class RoutingModule {}
