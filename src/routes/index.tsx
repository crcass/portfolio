/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import StyledFooter from '../components/Footer';
import StyledHeader from '../components/Header';
import SiteContainer from '../components/SiteContainer';
import { ROUTES } from '../constants/routes';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import Project from '../pages/Project';
import Projects from '../pages/Projects';

const Routes = () => {
  return (
    <Router>
      <Route render={({ location }) => (
        <>
          <StyledHeader />

          <SiteContainer>
            <SwitchTransition>
              <CSSTransition
                classNames="page"
                key={location.key}
                timeout={300}
              >
                <Switch location={location}>
                  <Route
                    component={Contact}
                    exact
                    path={`/${ROUTES.CONTACT}`}
                  />
                  <Route
                    component={Home}
                    exact
                    path={ROUTES.HOME}
                  />
                  <Route
                    component={Profile}
                    exact
                    path={`/${ROUTES.PROFILE}`}
                  />
                  <Route
                    component={Project}
                    exact
                    path={`/${ROUTES.PROJECTS}/:id`}
                  />
                  <Route
                    component={Projects}
                    exact
                    path={`/${ROUTES.PROJECTS}`}
                  />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </SwitchTransition>
          </SiteContainer>

          <StyledFooter />
        </>
      )}
      />
    </Router>
  );
};

export default Routes;