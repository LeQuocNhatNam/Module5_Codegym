import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FacilityListComponent } from './component/facility/facility-list/facility-list.component';
import { FacilityCreateComponent } from './component/facility/facility-create/facility-create.component';
import { FacilityEditComponent } from './component/facility/facility-edit/facility-edit.component';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerCreateComponent } from './component/customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './component/customer/customer-edit/customer-edit.component';
import { ContractListComponent } from './component/contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './component/contract/contract-create/contract-create.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ContractListComponent,
    ContractCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
