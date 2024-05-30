import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layout/client/client.component';
import { HomeComponent } from './components/home/home.component';
import { ChitietComponent } from './components/chitiet/chitiet.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'chitiet', component: ChitietComponent },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
