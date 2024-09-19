import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.dev';
import { catchError, map, Observable, throwError } from 'rxjs';
import { WeatherPeriods, WeatherResponse } from '../modal/weather.modal';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private http = inject(HttpClient);

	public getWeather(location:string): Observable<WeatherPeriods[]> {
		const url = `${environment.apiBase}${location}/31,80/forecast`;

		return this.http
      .get<WeatherResponse>(url)
      .pipe(
        map((res) => {
          return res?.properties?.periods;
        }),
        catchError((error) => {
          return throwError(() => error);
        })
      );
	}
}
