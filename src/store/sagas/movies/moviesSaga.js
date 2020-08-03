import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import {
    FETCH_MOVIES,
    fetchMoviesSuccessful,
    fetchMoviesFailed,
} from '../../actions/movies/moviesActions';
import { getAPIURL } from '../../../config/getPATH';
import { fetchGet } from '../sagaUtils';

export function* doFetchMovies(action) {
    try {
        const serviceBaseUrl = getAPIURL();
        const url = `${ serviceBaseUrl}/movies`;

        const payload = yield call (fetchGet, url);
        
        let imgsByCategory = payload[2].movies.filter((i) => i.categories.indexOf(action.payload) !== -1);
        

        let newPayload = [{
            type: action.payload,
            imgs: imgsByCategory,
        }]

        yield put(fetchMoviesSuccessful(newPayload));
    } catch(error) {
        yield put(fetchMoviesFailed(error));
    }
}

export const MoviesSagas = [
    takeEvery(FETCH_MOVIES, doFetchMovies),
];