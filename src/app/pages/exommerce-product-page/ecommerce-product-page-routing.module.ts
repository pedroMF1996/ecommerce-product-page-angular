import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceProductPageComponent } from './ecommerce-product-page.component';

const routes: Routes = [
  {
    path: '',
    component: EcommerceProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceProductPageRoutingModule { }
