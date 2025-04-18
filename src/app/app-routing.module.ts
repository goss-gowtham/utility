import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'stock',
    loadChildren: () => import('./stock-calc/stock-calc.module').then(m => m.StockCalcModule),
  },
  {
    path: 'space',
    component: HomeComponent,
  },
  {
    path: '', 
    redirectTo: 'stock',
    pathMatch: 'full',
  },
  { // Catch-all for unmatched routes
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
