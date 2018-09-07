import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  {
    path: 'demo',
    loadChildren: './demo/demo.module#DemoModule',
    data: { preload: true }
  },
  {
    path: 'personas',
    loadChildren: './personas-manager/personas-manager.module#PersonasManagerModule',
    data: { preload: true }
  },
  { path: '',   redirectTo: 'personas', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
