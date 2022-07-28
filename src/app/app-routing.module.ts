import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './about-us/contact-us/contact-us.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { HomeComponent } from './home/home.component';
import { TheTeamComponent } from './the-team/the-team.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'team', component: TheTeamComponent },
  { path: 'apply', component: ApplyNowComponent },
  { path: 'about', component: AboutUsComponent, children: [
    { path: 'contact', component: ContactUsComponent },
  ] },
];

  /*{ path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent, children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent },
  ] },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];*/

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
