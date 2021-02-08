import React from 'react';
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import User from './User';

const Users = () => {
  const { path, url } = useRouteMatch();
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${url}/github`}>Github</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${url}/facebook`}>FaceBook</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/:userId`}>
          <User />
        </Route>
        <Route path={path}>
          <span>Select a user please</span>
        </Route>
      </Switch>
    </div>
  );
};

export default Users;
