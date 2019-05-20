import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header';
import Center from './components/Center';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectPage from './pages/ProjectPage';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <Fragment>
          <Header />
          <Center>
            <TransitionGroup className="site-container">
              <CSSTransition key={location.key} timeout={500} classNames="page">
                <Switch location={location}>
                  <Route exact path="/portfolio/" component={Home} />
                  <Route exact path="/projects/" component={Projects} />
                  <Route
                    exact
                    path="/projects/:route"
                    component={ProjectPage}
                  />
                  <Route exact path="/profile/" component={Profile} />
                  <Route exact path="/contact/" component={Contact} />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
              <Footer />
            </TransitionGroup>
          </Center>
        </Fragment>
      )}
    />
  </Router>
);

export default App;
