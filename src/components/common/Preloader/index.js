import classes from './Preloader.module.css';
import preloader from '../../../assets/images/loader.svg';

const Preloader = () => {
  return <div className={classes.preloader}>
    <img src={preloader} alt="preloader"/>
  </div>
};

export default Preloader;
