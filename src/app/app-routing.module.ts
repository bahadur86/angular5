import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; 		// Added
import { AboutComponent } from './about/about.component';   // Added

const routes: Routes = [

	{
		path:'',
		component: HomeComponent,
		pathMatch: 'full'
	},

	{
		path:'about/:id',
		component: AboutComponent,
		//pathMatch: 'full'
	},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
