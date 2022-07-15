import FullScreen from './FullScreen/FullScreen';
import './Menu.css';
function Menu(props) {
  return (
    <div
      className='menu'
      style={{ color: props.navColor, fontFamily: props.font }}
    >
      <FullScreen toggleClick={props.toggleClick} />
    </div>
  );
}

export default Menu;
