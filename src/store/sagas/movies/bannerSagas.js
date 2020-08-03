import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import {
    FETCH_BANNER,
    fetchBannerSuccessful,
    fetchBannerFailed,
} from '../../actions/movies/bannerActions';
import { getAPIURL } from '../../../config/getPATH';
import { fetchGet } from '../sagaUtils';

export function* doFetchBanner() {
    try {
        const serviceBaseUrl = getAPIURL();
        const url = `${ serviceBaseUrl}/movies`;

        const payload = yield call (fetchGet, url);

        let imgsBanner = payload[2].movies.slice(0,3);

        yield put(fetchBannerSuccessful(imgsBanner));
    } catch(error) {
        yield put(fetchBannerFailed(error));
    }
}

export const BannerSagas = [
    takeLatest(FETCH_BANNER, doFetchBanner),
];
