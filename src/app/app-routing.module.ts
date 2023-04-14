import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { CrewComponent } from './pages/crew/crew.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { MoonComponent } from './components/moon/moon.component';
import { MarsComponent } from './components/mars/mars.component';
import { EuropaComponent } from './components/europa/europa.component';
import { TitanComponent } from './components/titan/titan.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'destination', component: DestinationComponent, children: [
      {
        path: '', component: MoonComponent
      },
      {
        path: 'moon', component: MoonComponent
      },
      {
        path: 'mars', component: MarsComponent
      },
      {
        path: 'europa', component: EuropaComponent
      },
      {
        path: 'titan', component: TitanComponent
      }
    ]
  },
  {
    path: 'crew', component: CrewComponent
  },
  {
    path: 'technology', component: TechnologyComponent
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
