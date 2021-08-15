import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidDailyComponent } from './page/covid-daily/covid-daily/covid-daily.component';
import { CovidProvinceComponent } from './page/covid-daily/covid-province/covid-province.component';


const routes: Routes = [
  { path: '',component: CovidDailyComponent },
  { path: 'covid-province', component: CovidProvinceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
