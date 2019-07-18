import React from '../../../../node_modules/react';
import PropTypes from '../../../../node_modules/prop-types';
import { ControlsStyled, Button } from './Controls.styled';

const Controls = ({ currentPage, lastPage, onHandlePrev, onHandleNext }) => (
  <ControlsStyled>
    <Button onClick={onHandlePrev} isDisabled={currentPage !== 1}>
      Previous
    </Button>
    <Button onClick={onHandleNext} isDisabled={currentPage < lastPage}>
      Next
    </Button>
  </ControlsStyled>
);

Controls.propTypes = {
  onHandlePrev: PropTypes.func.isRequired,
  onHandleNext: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
};

export default Controls;
