import { bootstrapMicroFrontend } from 'sp-ops-micro-frontend';
import App from 'App';
import { unregister } from 'serviceWorker';
import reportWebVitals from 'reportWebVitals';
import { name } from '../package.json';

bootstrapMicroFrontend(name, App, () => {
  unregister();
  reportWebVitals();
});
