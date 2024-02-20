import { Component } from 'react';
import PropTypes from 'prop-types';

import '../Button/Button.css';

export class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className='Button'
        onClick={this.props.onNextPage}
      >
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onNextPage: PropTypes.func,
};