import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(evt) {
    this.setState({
      search: (evt.target.value)
    });
  }

  render() {
    return (
      <div className="input-form">
        <input
          value={ this.state.description }
          id="search-input"
          type="text"
          placeholder="Search"
          onChange={ this.handleSearchInput }
        />
      </div>
    );
  }
}

export default Search;

