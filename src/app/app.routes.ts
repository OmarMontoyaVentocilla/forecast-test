import { Routes } from '@angular/router';
import { WeatherComponent } from './shared/components/weather/weather.component';
import { ForecastComponent } from './business/components/forecast/forecast.component';

export const routes: Routes = [
  { path: '', component: ForecastComponent},
  {
    path: 'weather/:location',
    component: WeatherComponent
  },
];
