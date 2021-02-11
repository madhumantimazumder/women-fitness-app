import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HealthDataContainerComponent } from'./health-data-container/health-data-container.component';
import {ProfileContainerComponent } from'./profile-container/profile-container.component';
const appRoutes: Routes = [
  { path: 'health', component: HealthDataContainerComponent },
  { path: 'profile', component: ProfileContainerComponent },
  { path: '',
    redirectTo: '/health',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
