import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { UserComponent } from './user.component';
import {UserRoute }       from './user.route';
import { UserprofileComponent } from './userprofile/userprofile.component';



@NgModule({
  imports: [
    CommonModule,
    UserRoute
  ],
  declarations: [
    UserComponent,
    UserprofileComponent
  ]
})
export class UserModule {}
