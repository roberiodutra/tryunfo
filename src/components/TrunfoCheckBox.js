import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TrunfoCheckBox extends Component {
  render() {
    const { cardTrunfo, onInputChange, hasTrunfo } = this.props;
    return (!hasTrunfo
      ? (
        <label htmlFor="cardTrunfo">
          Super Trybe Trunfo
          <input
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>
      )
      : <p>Você já tem um Super Trunfo em seu baralho</p>
    );
  }
}

TrunfoCheckBox.propTypes = {
  cardTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
  hasTrunfo: PropTypes.bool,
}.isRequired;

export default TrunfoCheckBox;
