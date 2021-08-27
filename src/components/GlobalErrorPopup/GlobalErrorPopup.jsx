import { useEffect, useRef } from 'react';
import c from './GlobalErrorPopup.module.css';


const GlobalErrorPopup = ({globalErrorMessage, setGlobalError}) => {
  let errorWrapperDiv = useRef(null);
  let errorDiv= useRef(null)

  useEffect(() => {
    if (globalErrorMessage) {
      // clear error after 4 sec
      setTimeout(() => {
        setGlobalError('');
      }, 4000);

      // animate error appearance and disappearance
      setTimeout(() => {
        errorWrapperDiv.current.style.height = '60px';
        errorDiv.current.style.height = '60px';
      }, 100);

      setTimeout(() => {
        errorWrapperDiv.current.style.height = '0';
        errorDiv.current.style.height = '0';
      }, 3000);
    }
  }, [globalErrorMessage])

  return (
    globalErrorMessage
    ? <div ref={errorWrapperDiv} className={c.errorWrapper}>
        <div ref={errorDiv}>{ globalErrorMessage }</div>
      </div>
    : null
  )
}

export default GlobalErrorPopup;
