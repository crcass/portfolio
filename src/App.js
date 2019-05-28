import React, { Fragment, useState } from 'react';
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
import projects from './projects';

const App = () => {
  const [dark, setDark] = useState(false);

  const darkMode = () => {
    setDark(!dark);
  };

  return (
    <Router>
      <Route
        render={({ location }) => (
          <Fragment>
            <Header dark={dark} darkMode={darkMode} />
            <Center dark={dark}>
              <TransitionGroup className="site-container">
                <CSSTransition
                  key={location.key}
                  timeout={500}
                  classNames="page"
                >
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      render={() => <Home projects={projects} />}
                    />
                    <Route
                      exact
                      path="/projects/"
                      render={() => (
                        <Projects dark={dark} projects={projects} />
                      )}
                    />
                    <Route
                      exact
                      path="/projects/:route"
                      render={props => (
                        <ProjectPage
                          {...props}
                          dark={dark}
                          projects={projects}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/profile/"
                      render={() => <Profile dark={dark} />}
                    />
                    <Route
                      exact
                      path="/contact/"
                      render={() => <Contact dark={dark} />}
                    />
                    <Route render={() => <NotFound dark={dark} />} />
                  </Switch>
                </CSSTransition>
                <Footer dark={dark} />
              </TransitionGroup>
            </Center>
          </Fragment>
        )}
      />
    </Router>
  );
};

export default App;
