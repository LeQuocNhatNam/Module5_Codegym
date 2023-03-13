import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCreateComponent } from './model/product/product-create/product-create.component';
import { ProductListComponent } from './model/product/product-list/product-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductEditComponent } from './model/product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './model/product/product-delete/product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
