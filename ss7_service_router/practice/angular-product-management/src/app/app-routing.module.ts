import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";
import {CategoryListComponent} from "./category/category-list/category-list.component";


const routes: Routes = [{
  path: 'product/list',
  component: ProductListComponent
}, {
  path: 'product/create',
  component: ProductCreateComponent
}, {
  path: 'product/edit/:id',
  component: ProductEditComponent
},
  {
    path: 'product/delete/:id',
    component: ProductDeleteComponent
  },
  {
    path: 'category/list',
    component: CategoryListComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
