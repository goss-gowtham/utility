import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockCalcComponent } from './stock-calc.component';

const routes: Routes = [{
  path: '',
  component: StockCalcComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockCalcRoutingModule { }
