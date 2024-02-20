import { Component } from 'react';
import PropTypes from 'prop-types';

import '../Searchbar/Searchbar.css'

export class Searchbar extends Component {
  render() {
  return (
    <header className='Searchbar'>
      <form className='SearchForm' onSubmit={this.props.onSubmit}>
        <button type='submit' className='SearchForm__button'>
          <span className='SearchForm__button__label'>Search</span>
        </button>
        <input
          className='SearchForm__input'
          type='text'
          name='search'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
        />
      </form>
    </header>
  );
  }
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
