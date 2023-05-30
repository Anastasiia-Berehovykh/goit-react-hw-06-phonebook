import { createReducer } from "@reduxjs/toolkit";
import {combineReducers} from 'redux';
import actions from './contactsActions';

const items = createReducer([], {
    [actions.addContact]: (state, action) => {
        return [...state, action.payload]
    },

[actions.removeContact]: (state, action) => {
   return state.filter(({id}) => id !== action.payload)
}


})

const filter = createReducer('', {
    [actions.filterContaсts]: (state, action) => {
        return action.payload;
   }
})

export default combineReducers({
    items,
    filter
})