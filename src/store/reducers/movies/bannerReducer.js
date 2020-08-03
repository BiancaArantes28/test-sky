import _ from 'lodash';
import {
    FETCH_BANNER,
    FETCH_BANNER_SUCCESSFUL,
    FETCH_BANNER_FAILED,
} from '../../actions/movies/bannerActions';
import { STATUS } from '../../../const/status';

const withoutError = (state) => _.omit(state, 'error');

const defaultState = {
    status: STATUS.NOT_FETCHED,
    imgs: [],
    img: {},
};

const successfulBanner = (state, payload) => {
    return {
        ...withoutError(state),
        status: STATUS.FETCHED,
        imgs: payload,
    };
}

export default function bannerReducer(state = defaultState, action) {
    switch(action.type) {
        case FETCH_BANNER:
            return { ...state, status: STATUS.INPROGRESS };

        case FETCH_BANNER_SUCCESSFUL:
            return successfulBanner(state, action.payload);

        case FETCH_BANNER_FAILED:
            return { ...state, error: action.payload, status: STATUS.FETCHED };
        
        default:
            return state;
    }
}
