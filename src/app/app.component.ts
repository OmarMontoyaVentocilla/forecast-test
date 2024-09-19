import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForecastComponent } from './business/components/forecast/forecast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ForecastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-test-weather';
}
