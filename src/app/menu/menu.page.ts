import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  activePath = '';

  pages = [
    {
      name: 'Home',
      path: '/menu/home'
    },
    {
      name: 'Personal Profile',
      path: '/menu/personal'
    },
    {
      name: 'Technical Skills',
      path: '/menu/technical'
    },
    {
      name: 'Soft Skills',
      path: '/menu/soft'
    },
    {
      name: 'Personal Projects',
      path: '/menu/my'
    },
    {
      name: 'Team Projects',
      path: '/menu/team'
    },
    {
      name: 'Extra Curriculum Activities',
      path: '/menu/extra'
    },
    {
      name: 'Contact Information',
      path: '/menu/contact'
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url;
    });
  }

  ngOnInit() {
  }
}
