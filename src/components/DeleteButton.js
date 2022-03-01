import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeleteButton extends Component {
  render() {
    const { delButton } = this.props;
    return (
      <button
        data-testid="delete-button"
        onClick={ delButton }
        type="button"
      >
        Delete
      </button>
    );
  }
}

DeleteButton.propTypes = {
  delButton: PropTypes.bool,
}.isRequired;

export default DeleteButton;
