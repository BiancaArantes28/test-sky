export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESSFUL = 'FETCH_MOVIES_SUCCESSFUL';
export const FETCH_MOVIES_FAILED = 'FETCH_MOVIES_FAILED';

export const fetchMovies = (payload = "") => ({
    type: FETCH_MOVIES,
    payload,
});

export const fetchMoviesSuccessful = (payload) => ({
    type: FETCH_MOVIES_SUCCESSFUL,
    payload,
});

export const fetchMoviesFailed = (error) => ({
    type: FETCH_MOVIES_FAILED,
    payload: error,
});
