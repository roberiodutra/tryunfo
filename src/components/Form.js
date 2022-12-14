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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
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
          hasTrunfo={ hasTrunfo }
        />
        <Button
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
  isSaveButtonDisabled: PropTypes.bool,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
