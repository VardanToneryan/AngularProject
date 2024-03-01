import { ApplicationConfig } from '@angular/core';
import {InMemoryScrollingFeature, provideRouter, withInMemoryScrolling} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withFetch} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling({ scrollPositionRestoration: 'top'});
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, inMemoryScrollingFeature),
    provideHttpClient(withFetch()), provideAnimationsAsync(),
  ]
};
