import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabasesComponent } from './databases/databases.component';
import { OperatingsystemsComponent } from './operatingsystems/operatingsystems.component';
import { ProgramminglanguagesComponent } from './programminglanguages/programminglanguages.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



const routes: Routes = [
  {path : 'operatingsystems', component:OperatingsystemsComponent},
  {path : 'programming' ,component:ProgramminglanguagesComponent},
  {path : 'databases' ,component:DatabasesComponent},
  { path: '', component:OperatingsystemsComponent},
  {path : '**', component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
