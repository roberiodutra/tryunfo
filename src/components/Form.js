import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import CardAttributes from './CardAttributes';
import ImageInput from './ImageInput';
import SelectInput from './SelectInput';
import TrunfoCheckBox from './TrunfoCheckBox';

class Form extends Component {
  render() {
    return (
      <form>
        <Input />
        <TextArea />
        <CardAttributes />
        <ImageInput />
        <SelectInput />
        <TrunfoCheckBox />
        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
