import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';

const demoRoutes: Routes = [
  { path: 'buttons',  component: ButtonsComponent },
  { path: 'flexbox',  component: FlexboxComponent },
  { path: '**', redirectTo: 'buttons' },
];


@NgModule({
  imports: [RouterModule.forChild(demoRoutes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
