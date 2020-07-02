import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { CustomersComponent } from './customers/customers.component';
import { FilmsComponent } from './films/films.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { FlimListComponent } from './films/flim-list/flim-list.component';
import { FlimDetailsComponent } from './films/flim-details/flim-details.component';
import { CustomersOfFilmComponent } from './films/customers-of-film/customers-of-film.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomersComponent,
    FilmsComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    FlimListComponent,
    FlimDetailsComponent,
    CustomersOfFilmComponent 
     ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:"customers",
        component: CustomersComponent
      },
      {
        path:"films",
        component:FilmsComponent 
      },
      {
        path:"filmDetails/:id",
        component:FlimDetailsComponent 
      },
       {
        path:"filmCustomers/:id",
        component: CustomersOfFilmComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
