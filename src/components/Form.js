import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import CardAttributes from './CardAttributes';
import ImageInput from './ImageInput';

class Form extends Component {
  render() {
    return (
      <form>
        <Input />
        <TextArea />
        <CardAttributes />
        <ImageInput />
      </form>
    );
  }
}

export default Form;
