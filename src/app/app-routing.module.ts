import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInitializationComponent } from './components/form-initialization/form-initialization.component';
import { PartDescriptionComponent } from './components/part-description/part-description.component';
import { UnitIdComponent } from './components/unit-id/unit-id.component';
import { LineIdComponent } from './components/line-id/line-id.component';
import { GroupIdComponent } from './components/group-id/group-id.component';
import { PartNumberComponent } from './components/part-number/part-number.component';

const routes: Routes = [
  { path: 'form-initialization', component: FormInitializationComponent },
  { path: 'part-description', component: PartDescriptionComponent },
  { path: 'unit-id', component: UnitIdComponent },
  { path: 'line-id', component: LineIdComponent },
  { path: 'group-id', component: GroupIdComponent },
  { path: 'part-number', component: PartNumberComponent },
  { path: '', redirectTo: '/form-initialization', pathMatch: 'full' },
  { path: '**', redirectTo: '/form-initialization' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }