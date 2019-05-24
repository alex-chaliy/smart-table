import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SmartTableModule } from '../ui-elements/smart-table/smart-table.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SmartTableModule
  ]
})
export class HomePageModule { }
