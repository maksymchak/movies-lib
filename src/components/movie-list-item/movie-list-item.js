import React from 'react';

import './movie-list-item.css';

const MovieListItem = ({ movie, removeMovie }) => {
  const { title, releaseYear, format, stars } = movie;

  const onDelete = (e) => {
    e.stopPropagation();
    removeMovie();
  }

  return (
    <div className="movie">
      <h4 className="movie__title">
        <i className="movie__icon material-icons">movie</i>
        <span title={title}>{title}</span>
      </h4>

      <div className="movie__release">
        <span className="movie__subtitle">Release Year:</span>
        <h4 className="movie-year movie-add">{releaseYear}</h4>
      </div>

      <div className="movie__format">
        <span className="movie__subtitle">Format:</span>
        <h4 className="movie-format movie-add">{format}</h4>
      </div>

      {stars && <p className="movie__stars">
        <span className="movie__subtitle">Stars:</span>
        {stars}
      </p>}

      <a className="btn btn-trash movie__btn-trash" onClick={onDelete} href="#/">
        <i className="material-icons">delete</i>
      </a>            
    </div>
  );
};

export default MovieListItem;
