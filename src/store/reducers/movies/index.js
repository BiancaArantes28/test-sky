import { combineReducers } from 'redux';

import bannerReducer from './bannerReducer';
import moviesReducer from './moviesReducer';

export default combineReducers({
    banner: bannerReducer,
    movies: moviesReducer,
});
