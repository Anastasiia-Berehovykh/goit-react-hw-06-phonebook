import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import contactsReducer from './contactsReducer';
import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage';


const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })]
  
const persistConfig = {
    key: 'savedContacts',
    storage: localStorage,
    blacklist: ['filter']
  }


export const store = configureStore({
    reducer: {
      contacts: persistReducer(persistConfig, contactsReducer)
    },
    middleware,
})

export const persistor = persistStore(store);