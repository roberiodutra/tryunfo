import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TrunfoCheckBox extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="cardTrunfo">
        Super Trybe Trunfo
        <input
          checked={ cardTrunfo }
          onChange={ onInputChange }
          id="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
        />
      </label>
    );
  }
}

TrunfoCheckBox.propTypes = {
  cardTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
}.isRequired;

export default TrunfoCheckBox;
