import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputName from './InputName';
import TextArea from './TextArea';
import CardAttributes from './CardAttributes';
import ImageInput from './ImageInput';
import SelectInput from './SelectInput';
import TrunfoCheckBox from './TrunfoCheckBox';
import Button from './Button';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onInputChange,
    } = this.props;

    return (
      <form>
        <InputName
          cardName={ cardName }
          onInputChange={ onInputChange }
        />
        <TextArea
          cardDescription={ cardDescription }
          onInputChange={ onInputChange }
        />
        <CardAttributes
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <ImageInput
          cardImage={ cardImage }
          onInputChange={ onInputChange }
        />
        <SelectInput
          cardRare={ cardRare }
          onInputChange={ onInputChange }
        />
        <TrunfoCheckBox
          cardTrunfo={ cardTrunfo }
          onInputChange={ onInputChange }
        />
        <Button />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
}.isRequired;

export default Form;
