import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { OrderContainerComponent } from './components/order-container/order-container.component';
import { UserListComponent } from './components/user-container/user-list/user-list.component';
import { UserDetailComponent } from './components/user-container/user-detail/user-detail.component';
import { UserSingleComponent } from './components/user-container/user-list/user-single/user-single.component';
import { OrderListComponent } from './components/order-container/order-list/order-list.component';
import { OrderSingleComponent } from './components/order-container/order-list/order-single/order-single.component';
import { OrderDetailComponent } from './components/order-container/order-list/order-single/order-detail/order-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    OrderContainerComponent,
    UserListComponent,
    UserDetailComponent,
    UserSingleComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
