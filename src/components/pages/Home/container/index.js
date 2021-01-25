import { connect } from 'react-redux';
import { setIsOpen, setData } from 'redux/slices/dialog.slice';
import Home from '../index';

const mapStateToProps = (state) => ({
  isOpen: state.dialog.isOpen,
  dialogData: state.dialog.data,
});

const mapDispatch = { setIsOpen, setData };

export default connect(mapStateToProps, mapDispatch)(Home);
