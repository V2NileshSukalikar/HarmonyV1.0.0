import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
const routes: Routes = [
  { path: '', redirectTo: '/page/Page1', pathMatch: 'full' },

  { path: 'page/:token',     component: PageComponent },

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}  