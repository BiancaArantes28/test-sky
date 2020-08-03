export const getMovies = (state) => state.movies;
export const getImgs = (state) => getMovies(state).banner.imgs;
export const getBannerStatus = (state) => getMovies(state).banner.status;