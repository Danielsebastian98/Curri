import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'my',
        loadChildren: '../my/my.module#MyPageModule'
      },
      {
        path: 'soft',
        loadChildren: '../soft/soft.module#SoftPageModule'
      },
      {
        path: 'personal',
        loadChildren: '../personal/personal.module#PersonalPageModule'
      },
      {
        path: 'team',
        loadChildren: '../team/team.module#TeamPageModule'
      },
      {
        path: 'technical',
        loadChildren: '../technical/technical.module#TechnicalPageModule'
      },
      {
        path: 'extra',
        loadChildren: '../extra/extra.module#ExtraPageModule'
      },
      {
        path: 'contact',
        loadChildren: '../contact/contact.module#ContactPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})

export class MenuPageModule { }
