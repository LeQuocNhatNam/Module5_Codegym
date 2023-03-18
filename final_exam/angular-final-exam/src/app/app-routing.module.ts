import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BusListComponent} from './component/bus/bus-list/bus-list.component';
import {BusEditComponent} from './component/bus/bus-edit/bus-edit.component';
import {BusCreateComponent} from './component/bus/bus-create/bus-create.component';


const routes: Routes = [
  {
    path: 'buses/:page',
    component: BusListComponent
  },
  {
    path: 'buses/edit/:id',
    component: BusEditComponent
  },
  {
    path: 'buses/create',
    component: BusCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
