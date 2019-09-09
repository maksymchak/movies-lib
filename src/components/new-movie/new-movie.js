import React, { Component } from 'react';

import {connect} from 'react-redux';

import { addMovie } from '../../actions';

import './new-movie.css';

class NewMovie extends Component {
  state = {
    title: '',
    releaseYear: '',
    format: '',
    stars: ''
  };

  handleTextChange = e => {
    if (e) {
      const {name, value} = e.target;

      this.setState({
        title: name === 'Title' ? value : this.state.title,
        releaseYear: name === 'Release year' ? value : this.state.releaseYear,
        format: name === 'Format' ? value : this.state.format,
        stars: name === 'Stars' ? value : this.state.stars
      });
    }
  };

  handleSubmit = e => {
    if (e) {
      e.preventDefault();
      this.props.addMovie(this.state);
      this.props.onClose();
    }
  };

  render() {
    const { onClose } = this.props;

    return (
      <form className="new-movie" onSubmit={this.handleSubmit}>
        <section className="new-movie-header">
          <h3 className="new-movie-title">New movie</h3>
          <a className="btn btn-close" onClick={onClose} href="#/">
            <i className="material-icons">close</i>
          </a>
        </section>

        <section className="new-movie-content">
          <div className="form-group">
            <label className="form-group__label" htmlFor="title" >Title</label>
            <input className="form-group__input"
                id="title"
                name="Title"
                type="text"
                placeholder="Movie title"
                onChange={this.handleTextChange}
                required/>
          </div>
          
          <div className="form-group">
            <label className="form-group__label" htmlFor="releaseYear">Release year</label>
            <input className="form-group__input"
                id="releaseYear"
                name="Release year"
                type="number"
                placeholder="Release year"
                onChange={this.handleTextChange}
                required
                min="1900"
                max="2018"/>
          </div>

          <div className="form-group">
            <label className="form-group__label" htmlFor="format">Format</label>
            <select className="form-group__select" id="format" name="Format" onChange={this.handleTextChange}
                value={this.state.format} required>
              <option value="" defaultValue="true" disabled>Format</option>
              <option value="VHS">VHS</option>
              <option value="DVD">DVD</option>
              <option value="Blu-Ray">Blu-Ray</option>
            </select>
          </div>

          <div className="form-group form-group-border-top">
            <textarea className="form-group__textarea" name="Stars" placeholder="Stars" rows="3"
                onChange={this.handleTextChange}/>
          </div>
        </section>

        <section className="new-movie-controls">
          <button className="btn-form btn-secondary"
              type="reset"
              onClick={onClose}>
              Cancel
          </button>
          <button className="btn-form btn-primary"
              type="submit">
              Add
          </button>
        </section>
      </form>
    );
  }
}

const mapDispatchToProps = {addMovie};

export default connect(null, mapDispatchToProps)(NewMovie);
