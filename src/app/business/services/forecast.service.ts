import { Injectable } from '@angular/core';
import { ForecastRoute } from '../model/forecastRoute.model';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  getRoutes(): ForecastRoute[] {
    return [
      {
        title: 'District of Columbia Forecast',
        icon: 'https://www.machupicchuterra.com/wp-content/uploads/mejores-clima-peru-full.jpg',
        url: '/weather/LWX'
      },
      {
        title: 'Kansas Forecast ',
        icon: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/GAN53S2CPFA4BKJ42WFVYYWTPA.jpg',
        url: '/weather/TOP'
      }
    ];
  }
}
