import React from '../../../../node_modules/react';
import PropTypes from '../../../../node_modules/prop-types';
import CounterStyled from './Counter.styled';

const Counter = ({ index, lastIndex }) => (
  <CounterStyled>
    {index} /{lastIndex}
  </CounterStyled>
);

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  lastIndex: PropTypes.number.isRequired,
};

export default Counter;
