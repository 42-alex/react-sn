import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
  return (
    <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
  )
}

export default DialogItem;
