import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MessengerComponent } from './messenger/messenger.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':userId', component: MessengerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }