import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { UserSingleComponent } from './User/user-single/user-single.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserSingleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
