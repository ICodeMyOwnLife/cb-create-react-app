import React, { FC, memo } from 'react';
import { MicroFrontendAppProps, MicroFrontend } from 'sp-ops-micro-frontend';
import { appRoutes, sideBarRoutes } from 'routes/routes';
import store from 'store';

export const AppComponent: FC<MicroFrontendAppProps> = ({
  isMicroFrontend,
  microFrontendPath,
}) => (
  <MicroFrontend
    appRoutes={appRoutes}
    isMicroFrontend={isMicroFrontend}
    microFrontendPath={microFrontendPath}
    sidebarRoutes={sideBarRoutes}
    store={store}
  />
);

const App = memo(AppComponent);
App.displayName = 'App';
export default App;
