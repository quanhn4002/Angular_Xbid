import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ClientComponent } from './layout/client/client.component';
import { HomeComponent } from './components/home/home.component';
import { ProductOneComponent } from './components/product-one/product-one.component';
import { ListdangdaugiaComponent } from './components/listdangdaugia/listdangdaugia.component';
import { ListchuanbidaugiaComponent } from './components/listchuanbidaugia/listchuanbidaugia.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChitietComponent } from './components/chitiet/chitiet.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BannerComponent, ClientComponent, HomeComponent, ProductOneComponent, ListdangdaugiaComponent, ListchuanbidaugiaComponent, FooterComponent, ChitietComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
