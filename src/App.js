import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import './App.css';

function App() {

  return (
    <Router>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar/>
        <div className='app-wrapper-content'>
          <Switch>
            <Route path='/login'>
              <div>Login page</div>
            </Route>
            <Route path='/profile/:profileId?'>
              <ProfileContainer />
            </Route>
            <Route path='/messages'>
              <DialogsContainer />
            </Route>
            <Route path='/news'>
              <News />
            </Route>
            <Route path='/music'>
              <Music />
            </Route>
            <Route path='/users'>
              <UsersContainer />
            </Route>
            <Route path='/settings'>
              <Settings />
            </Route>
            <Route path='/'>
              <ProfileContainer />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
