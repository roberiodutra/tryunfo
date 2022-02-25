import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputName extends Component {
  render() {
    const { cardName, onInputChange } = this.props;
    return (
      <label htmlFor="cardName">
        <p>Nome</p>
        <input
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
          id="cardName"
          type="text"
          data-testid="name-input"
        />
      </label>
    );
  }
}

InputName.propTypes = {
  cardName: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default InputName;
