import renderEntireApp from './render';
import state, { addPost } from './redux/state';
import './index.css';

renderEntireApp(state, addPost);