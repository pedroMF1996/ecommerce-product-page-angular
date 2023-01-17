import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceProductPageRoutingModule } from './ecommerce-product-page-routing.module';
import { EcommerceProductPageComponent } from './ecommerce-product-page.component';
import { DetailsComponent } from 'src/app/components/details/details.component';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';
import { MarketCartComponent } from 'src/app/components/market-cart/market-cart.component';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';


@NgModule({
  declarations: [
    EcommerceProductPageComponent,
    ToolbarComponent,
    MarketCartComponent,
    GalleryComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    EcommerceProductPageRoutingModule
  ],
  exports: [
    EcommerceProductPageComponent
  ]
})
export class EcommerceProductPageModule { }
