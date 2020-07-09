import React, { lazy } from 'react';
import Home from '@material-ui/icons/Home';
import { RouteInfo } from 'sp-ops-micro-frontend';
import paths from 'routes/paths';

export const sideBarRoutes: RouteInfo[] = [
  {
    ...paths.home(),
    icon: <Home />,
    component: lazy(() => import('containers/Home')),
  },
];

const subRoutes: RouteInfo[] = [];

export const appRoutes = [...subRoutes, ...sideBarRoutes];
