import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { ServiceComponent }  from './service/service.component';
import { UserlistComponent }  from './users/userlist.component';
import { UserdetailsComponent }  from './users/userdetails.component';

export const routes: Routes = [
    { path: 'service', component: ServiceComponent },
    { path: '**', redirectTo: 'userlist' },
    { path: 'user/userlist', component: UserlistComponent },
    { path: 'user/userdetails', component: UserdetailsComponent },


    /*{ path: 'user',
        children: [
          { path: '', redirectTo: 'userdetails', pathMatch: 'full' },
          { path: 'userlist', component: UserlistComponent },
          { path: 'userdetails', component: UserdetailsComponent }
        ]
    }*/
        
];

export const RouteRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
