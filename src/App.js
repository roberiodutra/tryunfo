import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validate = this.validate.bind(this);
  }

  onInputChange({ target: { name, value, type, checked } }) {
    const inputValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: inputValue,
    }, this.validate);
  }

  onSaveButtonClick() {
    this.setState((state) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: state.cardTrunfo === true
        || state.cardList.some((item) => item.cardTrunfo === true),
      cardList: [...state.cardList,
        {
          cardName: state.cardName,
          cardDescription: state.cardDescription,
          cardAttr1: state.cardAttr1,
          cardAttr2: state.cardAttr2,
          cardAttr3: state.cardAttr3,
          cardImage: state.cardImage,
          cardRare: state.cardRare,
          cardTrunfo: state.cardTrunfo,
        }],
    }));
  }

  validate() {
    const MIN = 0;
    const MAX = 90;
    const SUM = 210;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const fields = [cardName, cardDescription, cardImage];
    const emptyFields = fields.every((field) => field !== '');

    const attrValues = [cardAttr1, cardAttr2, cardAttr3];
    const checkAttrValues = attrValues.every((attr) => attr >= MIN && attr <= MAX);
    const sumAttr = parseFloat(cardAttr1)
      + parseFloat(cardAttr2)
      + parseFloat(cardAttr3)
      <= SUM;

    const isValid = emptyFields && checkAttrValues && sumAttr;
    if (isValid) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
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
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
