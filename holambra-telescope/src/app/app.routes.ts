import { Routes } from '@angular/router';
import { DesafiosComponent } from './components/desafios/desafios.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
    { path: 'app-desafios', component: DesafiosComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), HttpClientModule, FormsModule],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
