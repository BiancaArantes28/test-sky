import { combineReducers } from 'redux';

import helloWorldReducer from './helloworld/helloWorldReducers';
import moviesReducer from './movies';

export default combineReducers({
    helloWorld: helloWorldReducer,
    movies: moviesReducer,
});
