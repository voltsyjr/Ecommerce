import {combineReducers} from 'redux';
import basketReducer from './reducer';

const rootReducer= combineReducers({
    data:basketReducer,
});

export default rootReducer;