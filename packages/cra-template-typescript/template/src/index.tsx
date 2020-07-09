import React from 'react';
import ReactDOM from 'react-dom';
import {
  MicroFrontendContainer,
  MicroFrontendRouteInfo,
} from 'sp-ops-micro-frontend';
import * as serviceWorker from 'serviceWorker';
import reportWebVitals from 'reportWebVitals';
import routes from 'routes';

let mockedRoutes = routes;

if (process.env.NODE_ENV === 'development') {
  const overrideRoutes = JSON.parse(
    localStorage.getItem('hosts') || '[]',
  ) as MicroFrontendRouteInfo[];
  mockedRoutes = routes.map(({ host, name, ...rest }) => ({
    ...rest,
    name,
    host: overrideRoutes.find(r => r.name === name)?.host ?? host,
  }));
}

ReactDOM.render(
  <MicroFrontendContainer routes={mockedRoutes} />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
