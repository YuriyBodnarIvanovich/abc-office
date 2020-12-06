import {combineReducers, createStore} from 'redux';
import LanguageReducer from './language';

let reducer = combineReducers({
   languageData: LanguageReducer,
});

let store = createStore(reducer);

window.store = store;
export default store;
