import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashcompComponent } from './dashcomp/dashcomp.component';
import { FilterPipe } from './dashcomp/filter.pipe';
import { FormsModule } from '@angular/forms';
import { MyButtonDirective } from './dashcomp/dashcomp.mydirectivebutton';
import { MyResponseDirective } from './dashcomp/dashcomp.myresponse';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DashcompComponent,
    FilterPipe,
    MyButtonDirective,
    MyResponseDirective
  ],
  exports : [DashcompComponent]
})
export class DashboardModule { }
