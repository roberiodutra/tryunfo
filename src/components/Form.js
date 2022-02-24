import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';

class Form extends Component {
  render() {
    return (
      <form>
        <Input />
        <TextArea />
      </form>
    );
  }
}

export default Form;
