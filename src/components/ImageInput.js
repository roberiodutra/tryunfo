import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageInput extends Component {
  render() {
    const { cardImage, onInputChange } = this.props;
    return (
      <label htmlFor="cardImage">
        Image
        <input
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
          id="cardImage"
          type="text"
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  cardImage: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default ImageInput;
