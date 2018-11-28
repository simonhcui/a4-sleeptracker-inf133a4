import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'fourth', loadChildren: './pages/fourth/fourth.module#FourthPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'sleepiness', loadChildren: './sleepiness/sleepiness.module#SleepinessPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
];
*/