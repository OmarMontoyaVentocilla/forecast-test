import { Component, inject, input, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherPeriods } from '../../modal/weather.modal';
import { CommonModule, JsonPipe } from '@angular/common';
import { ChartConfiguration, ChartOptions, LabelItem} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SkeletonModule } from 'primeng/skeleton';


@Component({
  selector: 'app-weather-data',
  standalone: true,
  imports: [JsonPipe,BaseChartDirective,SkeletonModule,CommonModule],
  templateUrl: './weather-data.component.html',
  styleUrl: './weather-data.component.scss'
})
export class WeatherDataComponent implements OnInit {

  private weatherService = inject(WeatherService);
  location = input.required<string>();
  dataWeather:WeatherPeriods[] =[];
  loading=true;
 lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
    ]
  };
  chartLabels: LabelItem[] = [];
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Weather Forecast Temperature'
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Day/Time'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Temperature (°F)'
        },
        beginAtZero: false
      }
    }
  };
  lineChartLegend = true;
  chartColors = [
    {
      borderColor: '#3cba9f',
      backgroundColor: 'rgba(60,186,159,0.2)',
    },
  ];


  ngOnInit(): void {
    this.getWeatherInfo();
  }

  getWeatherInfo() {
    this.weatherService.getWeather(this.location()).subscribe({
      next: (res) => {
        this.loading=false;
         this.createChart(res);
      },
      error: (error) => {},
    });
  }

  createChart(res:WeatherPeriods[]) {

    const labels = res.map(period => period.name);
    const temperatures = res.map(period => period.temperature);
    this.lineChartData={
      labels,
      datasets: [
        {
          data: temperatures,
          label: 'Temperature (°F)',
          fill: true,
          tension: 0.6,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        }
      ]
    }
  }
}


