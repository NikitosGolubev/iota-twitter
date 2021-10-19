import { useDebugMode } from '@hooks/index';
import HomePage from '@pages/home/Main';
import { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const HomeRoutes: FC = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={match.path}>
        <HomePage />
      </Route>
    </Switch>
  );
};

const DevRoutes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomeRoutes />
      </Route>
    </Switch>
  );
};

const ProdRoutes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomeRoutes />
      </Route>
    </Switch>
  );
};

export const Routes: FC = () => {
  const { debug } = useDebugMode();
  if (debug) return <DevRoutes />;
  return <ProdRoutes />;
};
