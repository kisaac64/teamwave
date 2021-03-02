import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StackOverflowComponent } from './pages/stack-overflow/stack-overflow.component';


const routes: Routes = [
  { path: '', redirectTo: '/stack-overflow', pathMatch: 'full' },
  { path: 'stack-overflow', component: StackOverflowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
