import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectInput extends Component {
  render() {
    const rarity = ['normal', 'raro', 'muito raro'];
    const { cardRare, onInputChange } = this.props;
    return (
      <label htmlFor="cardRarity">
        <p>Raridade</p>
        <select
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
          id="cardRarity"
          data-testid="rare-input"
        >
          {rarity.map((el, index) => (
            <option key={ index }>{el}</option>))}
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  cardRare: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default SelectInput;
