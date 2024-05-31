import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layout/client/client.component';
import { HomeComponent } from './components/home/home.component';
import { ChitietComponent } from './components/chitiet/chitiet.component';
import { AdminComponent } from './layout/admin/admin.component';
import { DashbordAdminComponent } from './components/dashbord-admin/dashbord-admin.component';
import { PageDangdaugiaComponent } from './components/page-dangdaugia/page-dangdaugia.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'chitiet', component: ChitietComponent },
      { path: 'dangdaugia', component: PageDangdaugiaComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'dashbord', component: DashbordAdminComponent }],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
