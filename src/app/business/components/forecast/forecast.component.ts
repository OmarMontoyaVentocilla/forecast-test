import { Component, inject, OnInit } from '@angular/core';
import { ForecastService } from '../../services/forecast.service';
import { ForecastRoute } from '../../model/forecastRoute.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [RouterModule,CommonModule
    ],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss'
})
export class ForecastComponent implements OnInit {
  forecastService = inject(ForecastService);
  listForecast : ForecastRoute[] =[];

  ngOnInit() {
    this.listForecast =this.forecastService.getRoutes();
  }
}
