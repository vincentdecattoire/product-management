import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasManagerAppComponent } from './personas-manager-app/personas-manager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { PersonasService } from './services/personas.service';
//import { HttpClientModule } from '@angular/common/http';


const personasRoutes: Routes = [
  { path: '',  component: PersonasManagerAppComponent,
  children: [
    {path: ':id', component: MainContentComponent},
    {path: '', component: MainContentComponent}
  ] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    CommonModule,
    //HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    [RouterModule.forChild(personasRoutes)],
  ],
  providers: [PersonasService],
  declarations: [PersonasManagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent]
})
export class PersonasManagerModule { }
