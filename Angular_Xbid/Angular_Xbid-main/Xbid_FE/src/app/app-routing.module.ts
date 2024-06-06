import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layout/client/client.component';
import { HomeComponent } from './components/home/home.component';
import { ChitietComponent } from './components/chitiet/chitiet.component';
import { AdminComponent } from './layout/admin/admin.component';
import { DashbordAdminComponent } from './components/dashbord-admin/dashbord-admin.component';
import { PageDangdaugiaComponent } from './components/page-dangdaugia/page-dangdaugia.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'chitiet/:id', component: ChitietComponent },
      { path: 'dangdaugia', component: PageDangdaugiaComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashbord', component: DashbordAdminComponent },
      { path: 'addPro', component: AddProductComponent },
      { path: 'addCate', component: AddCategoryComponent },
    ],
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
