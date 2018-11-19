import PropTypes from 'prop-types';

const Aux = (props) => {
  return props.children;
}

Aux.propTypes = {
  children: PropTypes.element.isRequired
}

export default Aux;