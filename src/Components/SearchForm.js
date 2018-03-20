import React, { Component, PropTypes } from 'react';

export default class SearchForm extends Component {

  static proptypes = {
    onSearch: PropTypes.func.isRequired
  }

  state = {
    searchText: ''
  }

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.queryString.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search"
          onChange={this.onSearchChange}
          name="search"
          placeholder="Search..."
          ref={(input) => this.queryString = input}
        />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>
    );
  }
}