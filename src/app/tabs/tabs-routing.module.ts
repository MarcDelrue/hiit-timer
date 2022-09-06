import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'hiit',
        loadChildren: () =>
          import('../hiit/hiit.module').then((m) => m.HiitPageModule),
      },
      {
        path: 'timer',
        loadChildren: () =>
          import('../timer/timer.module').then((m) => m.TimerPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/hiit',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/hiit',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
