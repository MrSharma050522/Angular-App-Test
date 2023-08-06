import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

console.log("Log to check when this admin modules load");

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
