import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';
import './App.css';

function App(props) {
  const state = props.store.getState();

  return (
    <Router>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Switch>
            <Route path='/profile'>
              <Profile store={props.store} />
            </Route>
            <Route path='/messages'>
              <Dialogs state={state.dialogsPage} dispatch={props.store.dispatch.bind(props.store)} />
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
              <Profile store={props.store} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
