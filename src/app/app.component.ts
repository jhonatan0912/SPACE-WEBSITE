import { Component, OnInit } from '@angular/core';
import { Link } from './models/NavLink.interface';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  links: Array<Link> = [
    {
      name: '00 HOME',
      goTo: '/home'
    },
    {
      name: '01 DESTINATION',
      goTo: '/destination'
    },
    {
      name: '03 CREW',
      goTo: '/crew'
    },
    {
      name: '04 TECHNOLOGY',
      goTo: '/technology'
    }
  ];

  url: string = '';

  backgroundPath: string = ``;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }

      switch (this.url) {

        case '/destination':
          this.backgroundPath = `bg-[url('/assets/destination/background-destination-desktop.jpg')]`
          break;
        case '/destination/moon':
          this.backgroundPath = `bg-[url('/assets/destination/background-destination-desktop.jpg')]`
          break;
        case '/destination/mars':
          this.backgroundPath = `bg-[url('/assets/destination/background-destination-desktop.jpg')]`
          break;
        case '/destination/europa':
          this.backgroundPath = `bg-[url('/assets/destination/background-destination-desktop.jpg')]`
          break;
        case '/destination/titan':
          this.backgroundPath = `bg-[url('/assets/destination/background-destination-desktop.jpg')]`
          break;
        case '/crew':
          this.backgroundPath = `bg-[url('/assets/crew/background-crew-desktop.jpg')]`
          break;
        case '/technology':
          this.backgroundPath = `bg-[url('/assets/technology/background-technology-desktop.jpg')]`
          break;

        default:
          this.backgroundPath = `bg-[url('/assets/home/background-home-desktop.jpg')]`
          break;
      }

    });

  }

}
