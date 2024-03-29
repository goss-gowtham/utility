import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { StockCalcRoutingModule } from './stock-calc-routing.module';
import { StockCalcComponent } from './stock-calc.component';

import { MatInputModule } from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    StockCalcComponent
  ],
  imports: [
    CommonModule,
    StockCalcRoutingModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDividerModule
  ]
})
export class StockCalcModule { }
