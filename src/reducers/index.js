const initialState = {
  movies: [],
  searchTerm: ''
}

const deleteItem = (data, id) => {
  const idx = data.findIndex((el) => el.id === id);
  const newArray = [
    ...data.slice(0, idx),
    ...data.slice(idx + 1)
  ];
  return newArray;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIES_LOADED':
      return {
        movies: action.payload,
        searchTerm: ''
      }
    case 'LIST_LOADED':
      return {
        movies: [...state.movies, ...action.payload],
        searchTerm: ''
      }
    case 'MOVIES_DELETED':
      return {
        movies: action.payload,
        searchTerm: ''
      }
    case 'MOVIES_SEARCH':
      return {
        movies: state.movies,
        searchTerm: action.payload
      }
    case 'MOVIES_SORT':
      return {
        movies: action.payload,
        searchTerm: state.searchTerm
      }
    case 'MOVIE_DELETE':
      return {
        movies: deleteItem(state.movies, action.payload),
        searchTerm: state.searchTerm
      }
    case 'MOVIE_ADD':
      return {
        movies: [...state.movies, action.payload],
        searchTerm: state.searchTerm
      }
    default: 
    return state;
  }
};

export default reducer;