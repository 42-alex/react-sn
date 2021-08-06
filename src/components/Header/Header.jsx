import logo from '../../logo.svg';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logoWrapper}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.loginBlock}>
        { props.isAuthorized
          ? <span>{ props.login }</span>
          : <NavLink to="/login">
            Login
          </NavLink>
        }
      </div>
    </header>
  );
}

export default Header;