export interface WeatherResponse{
  properties:WeatherProperties;
}

export interface WeatherProperties{
  periods:WeatherPeriods[];
}

export interface WeatherPeriods{
  number: number;
  name: string;
  startTime: string;
  endTime: string;
  isDaytime:boolean;
  temperature: number;
  temperatureUnit:string;
  temperatureTrend:string;
  probabilityOfPrecipitation: {
    unitCode: string;
    value: string | null;
  },
  windSpeed:string;
  windDirection: string;
  icon: string;
  shortForecast:string;
  detailedForecast: string;
}
