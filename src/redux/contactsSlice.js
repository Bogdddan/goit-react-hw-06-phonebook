import { createSlice , nanoid } from "@reduxjs/toolkit";
import { CONTACTS } from './constants';

const contactsInitState = [];

const contactSlice = createSlice({
    name: CONTACTS,
    initialState: contactsInitState,
    reducers: {
        addedContact: {
            reducer(state , action) {
                return [...state, action.payload];
            },
            prepare(name , number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            },
        },
        deletedContacts(state, action) {
            return state.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { addedContact, deletedContact } = contactsSlice.actions;
export const contactsReducer = contactSlice.reducer;
