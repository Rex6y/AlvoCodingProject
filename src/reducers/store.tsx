import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import dataStoreSlice from './features/dataStore/dataStoreSlice'


export const store = configureStore({
    reducer: {
        dataStore: dataStoreSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)