import Focus from './Focus/Focus';
import FullScreen from './FullScreen/FullScreen';
import Inmersion from './Inmersion/Inmersion';
import Lector from './Lector/Lector';
import './Menu.css';
function Menu(props) {
  return (
    <div className='menu' style={{ color: props.navColor }}>
      <FullScreen
        toggleClickFS={props.toggleClickFS}
        isClickedFS={props.isClickedFS}
      />
      <Focus toggleFocus={props.toggleFocus} isFocus={props.isFocus} />
      <Lector />
      <Inmersion toggleView={props.toggleView} isOpen={props.isOpen} />
    </div>
  );
}

export default Menu;
