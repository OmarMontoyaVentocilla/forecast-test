import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideCharts} from 'ng2-charts';
import { CategoryScale, Legend, LinearScale, LineController, LineElement, PointElement, Title, Tooltip } from 'chart.js';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
              provideHttpClient(),
              provideCharts({ registerables: [CategoryScale, LinearScale, PointElement,
                LineElement, Title, Tooltip, Legend,LineController] })
             ]
};
