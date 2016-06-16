// App
import {AppState} from "./app.state";
export * from './app.component';

import {AUTH_PROVIDERS} from 'angular2-jwt';

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  AUTH_PROVIDERS
];
