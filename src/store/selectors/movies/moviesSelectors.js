export const getMovies = (state) => state.movies;
export const getImgs = (state) => getMovies(state).movies.imgs;
export const getStatusMovies = (state) => getMovies(state).movies.status;