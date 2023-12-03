import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreeceComponent } from './modules/page2/greece/greece.component';
import { HomeComponent } from './modules/components/home/home.component';
import { GermanyComponent } from './modules/page3/germany/germany.component';
import { CoreaComponent } from './modules/page4/corea/corea.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meubebe', component: HomeComponent },
  { path: 'eu', component: GreeceComponent },
  { path: 'te', component: GermanyComponent },
  { path: 'amo', component: CoreaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
