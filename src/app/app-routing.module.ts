import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreeceComponent } from './modules/page2/greece/greece.component';
import { HomeComponent } from './modules/components/home/home.component';
import { GermanyComponent } from './modules/page3/germany/germany.component';
import { CoreaComponent } from './modules/page4/corea/corea.component';

const routes: Routes = [
  { path: '', component: GermanyComponent },
  { path: 'meubebe', component: HomeComponent },
  { path: 'eu', component: GreeceComponent },
  { path: 'te', component: GermanyComponent },
  { path: 'amo', component: CoreaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
