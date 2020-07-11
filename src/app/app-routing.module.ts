import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ExceptionDashboardComponent } from './ojp-dashboard/exception-dashboard/exception-dashboard.component'



const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'dashboard', component: ExceptionDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
