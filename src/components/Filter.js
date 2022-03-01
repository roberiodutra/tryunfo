import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const rarity = ['todas', 'normal', 'raro', 'muito raro'];
    const { onInputChange } = this.props;

    return (
      <form>
        <label htmlFor="nameFilter">
          Buscar
          <input
            data-testid="name-filter"
            type="text"
            onChange={ onInputChange }
            name="nameFilter"
          />
        </label>
        <label htmlFor="rareFilter">
          Raridade
          <select
            onChange={ onInputChange }
            data-testid="rare-filter"
            name="rareFilter"
          >
            { rarity.map((el, i) => <option key={ i }>{el}</option>) }
          </select>
        </label>
        <label htmlFor="trunfoFilter">
          Trunfo
          <input
            onChange={ onInputChange }
            data-testid="trunfo-filter"
            type="checkbox"
            name="trunfoFilter"
          />
        </label>
      </form>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func,
}.isRequired;

export default Filter;
