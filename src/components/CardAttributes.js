import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardAttributes extends Component {
  render() {
    const { cardAttr1, cardAttr2, cardAttr3, onInputChange } = this.props;
    const cards = [cardAttr1, cardAttr2, cardAttr3];
    return (
      cards.map((el, index) => (
        <label key={ index } htmlFor={ `attr${index + 1}` }>
          {`Attr${index + 1}`}
          <input
            name={ `cardAttr${index + 1}` }
            value={ el }
            onChange={ onInputChange }
            id={ `attr${index + 1}` }
            type="number"
            data-testid={ `attr${index + 1}-input` }
          />
        </label>
      ))
    );
  }
}

CardAttributes.propTypes = {
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default CardAttributes;
