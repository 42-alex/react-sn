import { useEffect } from 'react';
import c from './GlobalErrorPopup.module.css';


const GlobalErrorPopup = ({globalErrorMessage, setGlobalError}) => {
  useEffect(() => {
    if (globalErrorMessage) {
      setTimeout(() => {
        setGlobalError('');
      }, 4000);
    }
  }, [globalErrorMessage])

  return (
    globalErrorMessage
    ? <div className={c.errorWrapper}>
        <div>{ globalErrorMessage }</div>
      </div>
    : null
  )
}

export default GlobalErrorPopup;
