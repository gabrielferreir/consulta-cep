import {combineReducers} from 'redux';
import mainReducer from './reducer/mainReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    mainReducer,
    form: formReducer
});
