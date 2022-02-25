import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import CardAttributes from './CardAttributes';
import ImageInput from './ImageInput';
import SelectInput from './SelectInput';
import TrunfoCheckBox from './TrunfoCheckBox';
import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

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
    } = this.state;

    return (
      <form>
        <Input
          cardName={ cardName }
          onInputChange={ this.onInputChange }
        />
        <TextArea
          cardDescription={ cardDescription }
          onInputChange={ this.onInputChange }
        />
        <CardAttributes
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          onInputChange={ this.onInputChange }
        />
        <ImageInput
          cardImage={ cardImage }
          onInputChange={ this.onInputChange }
        />
        <SelectInput
          cardRare={ cardRare }
          onInputChange={ this.onInputChange }
        />
        <TrunfoCheckBox
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
        />
        <Button />
      </form>
    );
  }
}

export default Form;
