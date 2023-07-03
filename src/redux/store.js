import { combineReducers , configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { CONTACTS } from './constants';

import { persistStore , persistReducer } from 'redux-persist';
import  storage  from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
    key: "root",
    storage,
    whitelist: [CONTACTS],
};

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

const persistReducer = persistReducer(persistConfig , rootReducer );

export const store = configureStore({
    reducer: persistReducer,
});

export const persistor = persistStore(store);

