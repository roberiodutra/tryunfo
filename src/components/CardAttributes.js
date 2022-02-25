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
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  onInputChange: PropTypes.func,
}.isRequired;

export default CardAttributes;
