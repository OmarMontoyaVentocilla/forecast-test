import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherDataComponent } from '../weather-data/weather-data.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [WeatherDataComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  private route = inject(ActivatedRoute);
  location: string='';


  ngOnInit(): void {
    this.location = this.route.snapshot.paramMap.get('location') ?? '';
  }
}

