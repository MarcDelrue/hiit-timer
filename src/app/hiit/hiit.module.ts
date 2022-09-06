import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HiitPageRoutingModule} from './hiit-routing.module';

import {HiitPage} from './hiit.page';
import {TimerComponent} from "./modal/timer/timer.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HiitPageRoutingModule
  ],
  declarations: [HiitPage, TimerComponent]
})
export class HiitPageModule {
}
