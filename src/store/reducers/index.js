import { combineReducers } from 'redux';

import helloWorldReducer from './helloworld/helloWorldReducers';

export default combineReducers({
    helloWorld: helloWorldReducer,
});
