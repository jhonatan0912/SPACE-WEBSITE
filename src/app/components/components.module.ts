import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoonComponent } from './moon/moon.component';
import { MarsComponent } from './mars/mars.component';
import { EuropaComponent } from './europa/europa.component';
import { TitanComponent } from './titan/titan.component';



@NgModule({
  declarations: [
    MoonComponent,
    MarsComponent,
    EuropaComponent,
    TitanComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MoonComponent,
    MarsComponent,
    EuropaComponent,
    TitanComponent
  ]
})
export class ComponentsModule { }
