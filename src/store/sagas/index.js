import { all } from 'redux-saga/effects';
import { BannerSagas } from './movies/bannerSagas';
import { MoviesSagas } from './movies/moviesSaga';

export default function* rootSagas() {
    return yield all([
        ...BannerSagas,
        ...MoviesSagas,
    ]);
}
