import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { ServiceComponent }  from './../service/service.component';
import { UserlistComponent }  from './../users/userlist.component';
import { UserdetailsComponent }  from './../users/userdetails.component';

export const routes: Routes = [
   { path: 'service', component: ServiceComponent },
   { path: 'userlist', component: UserlistComponent },
    { path: 'userdetails', component: UserdetailsComponent },
    { path: '**', redirectTo: 'userlist' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule {};
