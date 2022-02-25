import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;
    return (
      <button
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
        type="button"
        data-testid="save-button"
      >
        Salvar
      </button>
    );
  }
}

Button.propTypes = {
  isSaveButtonDisabled: PropTypes.bool,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Button;
