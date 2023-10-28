import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AutoUnsubscribeComponent } from './auto-unsubscribe/auto-unsubscribe.component';
import { DemoComponent } from './demo/demo.component';


export const routes: Routes = [
  { path: '', component: AutoUnsubscribeComponent },
  { path: 'demo', component: DemoComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
