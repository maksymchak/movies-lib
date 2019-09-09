import React, { Component } from 'react';

import './filter-panel.css';

export default class FilterPanel extends Component {

  onSearchChange = (e) => {
    const term = e.target.value;
    this.props.onSearchChange(term);
  };

  sortAlgorithm = (data, order) => {
    return data.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()) * order);
  }

  sortAlphabetical = () => {
    const { visibleItems, sortTitle, sortMovies, toggleTitle } = this.props;
    sortMovies(this.sortAlgorithm(visibleItems, sortTitle));
    toggleTitle();
  }

  render() {
    const { deleteMovies, searchTerm } = this.props;

    return (
      <div className="movies-controls">
        <div className="search">
          <input  type="text" 
            className="searchTerm" 
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={this.onSearchChange} />
        </div>

        <a className="btn btn-sort" onClick={this.sortAlphabetical} href="#/">
          <span>Sort by title</span>
          <i className="material-icons">sort</i>
        </a>
        
        <a className="btn btn-trash" onClick={deleteMovies} href="#/">
          <span>Delete all</span>
          <i className="material-icons">delete</i>
        </a>
      </div>
    );    
  }
}


