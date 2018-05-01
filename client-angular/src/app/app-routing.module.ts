import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerListComponent }      from './components/partner-list/partner-list.component';
import { JobListComponent} from './components/job-list/job-list.component';
import { ProfilePageComponent} from './user/profile-page/profile-page.component'

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'jobs',component:JobListComponent},
  { path:'profile', component: ProfilePageComponent },
  {path:'partner',component:PartnerListComponent},
  // {path:'**',component:HomeComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}