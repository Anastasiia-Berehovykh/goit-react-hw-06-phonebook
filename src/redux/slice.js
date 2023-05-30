import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const initialState = {
    items: [],
    filter: ''
}
// { id: 'id-1', userName: 'Rosie Simpson', userNumber: '459-12-56' },
//     { id: 'id-2', userName: 'Hermione Kline', userNumber: '443-89-12' },
//     { id: 'id-3', userName: 'Eden Clements', userNumber: '645-17-79' },
//     { id: 'id-4', userName: 'Annie Copeland', userNumber: '227-91-26' }, 

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