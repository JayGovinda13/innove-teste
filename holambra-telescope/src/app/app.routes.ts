import { Routes } from '@angular/router';
import { DesafiosComponent } from './components/desafios/desafios.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'app-desafios', component: DesafiosComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
