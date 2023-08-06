import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

console.log("Log to check when this user modules load");
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
