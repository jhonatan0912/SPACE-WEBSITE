import { Component } from '@angular/core';
import { Link } from 'src/app/models/NavLink.interface';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent {

  links: Array<Link> = [
    {
      name: 'MOON',
      goTo: '/destination/moon'
    },
    {
      name: 'MARS',
      goTo: '/destination/mars'
    },
    {
      name: 'EUROPA',
      goTo: '/destination/europa'
    },
    {
      name: 'TITAN',
      goTo: '/destination/titan'
    },
  ]

}
