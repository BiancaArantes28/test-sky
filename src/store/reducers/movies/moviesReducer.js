import _ from 'lodash';
import {
    FETCH_MOVIES,
    FETCH_MOVIES_SUCCESSFUL,
    FETCH_MOVIES_FAILED
} from '../../actions/movies/moviesActions';
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
        imgs: state.imgs.concat(payload),
    };
}

export default function moviesReducer(state = defaultState, action) {
    switch(action.type) {
        case FETCH_MOVIES:
            return { ...state, status: STATUS.INPROGRESS };

        case FETCH_MOVIES_SUCCESSFUL:
            return successfulBanner(state, action.payload);

        case FETCH_MOVIES_FAILED:
            return { ...state, error: action.payload, status: STATUS.FETCHED }

        default:
            return state;
    }
}
