import logo from '../../logo.svg';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/reducers/auth-reducer';

const Header = (props) => {
  const handleLogout = () => {
    props.logout();
  }

  return (
    <header className={classes.header}>
      <div className={classes.logoWrapper}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.loginBlock}>
        { props.isAuthorized
          ? <>
              <span>{ props.login }</span>
              <button className={classes.logoutBtn} onClick={ handleLogout }>Logout</button>
            </>
          : <NavLink to="/login">
            Login
          </NavLink>
        }
      </div>
    </header>
  );
}

export default connect(null, { logout })(Header);