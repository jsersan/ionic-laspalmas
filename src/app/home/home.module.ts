import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LasPalmasDescriptionComponent } from '../components/laspalmas-description/laspalmas-description.component';

import { LasPalmasImageComponent } from '../components/laspalmas-image/laspalmas-image.component';
import { LasPalmasInformationComponent } from '../components/laspalmas-information/laspalmas-information.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    LasPalmasDescriptionComponent,
    LasPalmasImageComponent,
    LasPalmasInformationComponent
  ]
})
export class HomePageModule {}
