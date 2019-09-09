const moviesLoaded = (newMovies) => {
  return {
    type: 'MOVIES_LOADED',
    payload: newMovies
  };
};

const listLoaded = (newMovies) => {
  return {
    type: 'LIST_LOADED',
    payload: newMovies
  };
};

const deleteMovies = () => {
  return {
    type: 'MOVIES_DELETED',
    payload: []
  };
};

const onSearchChange = (term) => {
  return {
    type: 'MOVIES_SEARCH',
    payload: term
  };
};

const sortMovies = (currentMovies) => {
  return {
    type: 'MOVIES_SORT',
    payload: currentMovies
  };
};

const removeMovie = (itemId) => {
  return {
    type: 'MOVIE_DELETE',
    payload: itemId
  };
};

const addMovie = (newMovie) => {
  return {
    type: 'MOVIE_ADD',
    payload: newMovie
  };
};

export {
  moviesLoaded,
  listLoaded,
  deleteMovies,
  onSearchChange,
  sortMovies,
  removeMovie,
  addMovie
};

