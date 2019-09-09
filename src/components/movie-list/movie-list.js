import React, { Component, Fragment } from 'react';
import MovieListItem from '../movie-list-item';
import { connect } from 'react-redux';

import { withMoviestoreService } from '../hoc';
import { moviesLoaded, listLoaded, deleteMovies,
   onSearchChange, sortMovies, removeMovie } from '../../actions';
import FilterPanel from '../filter-panel';
import MovieLoader from '../movie-loader';

import './movie-list.css';

class MovieList extends Component {

  state = {
    sortTitle: 1
  };

  componentDidMount() {
    const { moviestoreService } = this.props;
    const data = moviestoreService.getMovies();
    this.props.moviesLoaded(data);
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    };

    return items.filter((movie) => {
      const title = movie.title.toLowerCase();
      const stars = movie.stars.toLowerCase();
      return title.includes(term.toLowerCase()) || stars.includes(term.toLowerCase());
    });
  }

  toggleTitle =() => {
    this.setState({
      sortTitle: this.state.sortTitle === 1 ? -1 : 1
    });
  };


  render() {
    const { movies, listLoaded, deleteMovies, onSearchChange,
       searchTerm, sortMovies, removeMovie } = this.props;

    const visibleItems = this.search(movies, searchTerm);

    const hasData = (visibleItems) ? visibleItems.map((movie) => {
      return (
        <li key={movie.id}>
          <MovieListItem movie={movie} removeMovie={() => removeMovie(movie.id)} />
        </li>
      )
    }) : null;

    return (
      <Fragment>
        <section className="movies">
          <FilterPanel  deleteMovies={deleteMovies}
            movies={movies}
            onSearchChange={(term) => onSearchChange(term)}
            searchTerm={searchTerm} sortTitle={this.state.sortTitle}
            visibleItems={visibleItems} sortMovies={sortMovies}
            toggleTitle={this.toggleTitle} />
          <ul className="movies__list">
            { hasData }
          </ul>
        </section>
        <MovieLoader listLoaded={listLoaded} />
      </Fragment>
    );
  }
}

const mapStateToProps = ({movies, searchTerm}) => {
  return { movies, searchTerm };
};

const mapDispatchToProps = {
  moviesLoaded,
  listLoaded,
  deleteMovies,
  onSearchChange,
  sortMovies,
  removeMovie
};

export default withMoviestoreService()(connect(mapStateToProps, mapDispatchToProps)(MovieList));

