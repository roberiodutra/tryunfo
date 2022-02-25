import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { cardDescription, onInputChange } = this.props;
    return (
      <label htmlFor="cardDescription">
        <p>Descrição</p>
        <textarea
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
          id="cardDescription"
          type="text"
          data-testid="description-input"
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  cardDescription: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default TextArea;
