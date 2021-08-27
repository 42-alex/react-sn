import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/reducers/app-reducer';
import Preloader from './components/common/Preloader';
import NoMatch from './components/NoMatch/NoMatch';
import './App.css';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <Router>
        <div className='app-wrapper'>
          <HeaderContainer/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Switch>
              <Route path='/login'>
                <LoginPage/>
              </Route>
              <Route path='/profile/:profileId?'>
                <ProfileContainer/>
              </Route>
              <Route path='/messages'>
                <Suspense fallback={<div>Loading...</div>}>
                  <DialogsContainer />
                </Suspense>
              </Route>
              <Route path='/news'>
                <Suspense fallback={<div>Loading...</div>}>
                  <News />
                </Suspense>
              </Route>
              <Route path='/music'>
                <Suspense fallback={<div>Loading...</div>}>
                  <Music />
                </Suspense>
              </Route>
              <Route path='/users'>
                <UsersContainer/>
              </Route>
              <Route path='/settings'>
                <Settings/>
              </Route>
              <Route exact path='/'>
                <ProfileContainer/>
              </Route>
              <Route path='/404'>
                <NoMatch />
              </Route>
              <Route path='*'>
                <Redirect to="/404" />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initializeApp })(App);
