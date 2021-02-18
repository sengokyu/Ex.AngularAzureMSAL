import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { TopPageComponent } from './top-page/top-page.component';

const routes: Routes = [
  {
    path: '',
    component: TopPageComponent,
    pathMatch: 'full',
    canActivate: [MsalGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
