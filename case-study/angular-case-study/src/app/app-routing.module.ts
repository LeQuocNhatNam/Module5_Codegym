import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerCreateComponent} from "./component/customer/customer-create/customer-create.component";
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {CustomerEditComponent} from "./component/customer/customer-edit/customer-edit.component";


const routes: Routes = [{
  path: 'customer',
  component: CustomerListComponent
},
  {
    path: 'customer/create',
    component: CustomerCreateComponent
  },
  {
    path: 'customer/edit',
    component: CustomerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
