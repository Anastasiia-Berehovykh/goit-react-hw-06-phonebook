import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const initialState = {
    items: [],
    filter: ''
}


export const mySlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact(state, action) {

                        state.items.push({
                            id: nanoid(),
                      userName: action.payload.userName,
                      userNumber: action.payload.userNumber,
                        });
                 },
       
        removeContact(state, action) {
 return state.items.filter(({id}) => id !== action.payload.id)
        },
        filterContaсt(state, action) {
        return action.payload

        },
    }
})

export const { addContact, removeContact, filterContaсt } = mySlice.actions;