import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule,MatSelectModule,MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule,MatSelectModule,MatCardModule],
})
export class MaterialModule { }