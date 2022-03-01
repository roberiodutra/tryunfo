import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
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
      </form>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func,
}.isRequired;

export default Filter;
