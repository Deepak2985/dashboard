
 import {Routes} from '@angular/router'

 

import { DashboardComponent } from './dashboard/dashboard.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';

 
 export const appRoutes:Routes=[
        {path:'dashboard', component:DashboardComponent},
        {path:'opportunities', component:OpportunitiesComponent},
        {path:'', redirectTo:'/dashboard', pathMatch:'full'}

        
    ];