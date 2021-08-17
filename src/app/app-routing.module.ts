

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/* 
const routes: Routes = [
  { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  { path: 'product-list', component: ProductList },
  { path: 'product-details/:id', component: ProductDetails,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: Overview },
      { path: 'specs', component: Specs }
    ]
  }
];
 */
import { MainComponent } from './main/main.component';

  // <a routerLink="/math">link to user component</a>
export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "main" },
  { path: "main", component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/* Location Providers */
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

export const LocationProviders = [
  { provide: APP_BASE_HREF, useValue: '/' },
  { provide: LocationStrategy, useClass: HashLocationStrategy }
];
