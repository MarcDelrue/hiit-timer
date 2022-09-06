import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiitPage } from './hiit.page';

const routes: Routes = [
  {
    path: '',
    component: HiitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiitPageRoutingModule {}
