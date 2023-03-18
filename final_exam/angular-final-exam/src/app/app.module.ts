import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { BusListComponent } from './component/bus/bus-list/bus-list.component';
import { BusEditComponent } from './component/bus/bus-edit/bus-edit.component';
import { BusCreateComponent } from './component/bus/bus-create/bus-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BusListComponent,
    BusEditComponent,
    BusCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
