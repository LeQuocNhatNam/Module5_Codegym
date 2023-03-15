import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerCreateComponent} from "./component/customer/customer-create/customer-create.component";
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {CustomerEditComponent} from "./component/customer/customer-edit/customer-edit.component";
import {ContractListComponent} from "./component/contract/contract-list/contract-list.component";
import {FacilityListComponent} from "./component/facility/facility-list/facility-list.component";
import {FacilityEditComponent} from "./component/facility/facility-edit/facility-edit.component";
import {FacilityCreateComponent} from "./component/facility/facility-create/facility-create.component";
import {ContractCreateComponent} from "./component/contract/contract-create/contract-create.component";


const routes: Routes = [{
  path: 'customer',
  component: CustomerListComponent
},
  {
    path: 'customer/create',
    component: CustomerCreateComponent
  },
  {
    path: 'customer/edit/:id',
    component: CustomerEditComponent
  },
  {
    path: 'contract',
    component: ContractListComponent
  },
  {
    path: 'facility',
    component: FacilityListComponent
  },
  {
    path: 'facility/create',
    component: FacilityCreateComponent
  },
  {
    path: 'facility/edit/:id',
    component: FacilityEditComponent
  },
  {
    path: 'contract/create',
    component: ContractCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
