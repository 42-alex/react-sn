import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';
import './App.css';

function App() {

  return (
    <Router>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Switch>
            <Route path='/profile'>
              <Profile />
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
            <Route path='/settings'>
              <Settings />
            </Route>
            <Route path='/'>
              <Profile />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
