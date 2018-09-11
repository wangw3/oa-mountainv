import { combineReducers } from 'redux';
import books from './books';
export default combineReducers({
    bookLists: books
});