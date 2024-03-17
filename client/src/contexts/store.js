// store.js

import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Import createSlice and createReducer from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit'

// Define persist configuration for countup
const persistConfig1 = {
  key: 'countupKey',
  version: 1,
  storage,
}

// Define persist configuration for countdown
const persistConfig2 = {
  key: 'countdownKey',
  version: 1,
  storage,
}

// Initial state for countup
const initialCountupState = { time: 0 }

// Create countup slice
const countupSlice = createSlice({
  name: 'countup',
  initialState: initialCountupState,
  reducers: {
    setCountupTime: (state, action) => {
      state.time = action.payload
    },
  },
})

// Initial state for countdown
const initialCountdownState = { time: 15 }

// Create countdown slice
const countdownSlice = createSlice({
  name: 'countdown',
  initialState: initialCountdownState,
  reducers: {
    setCountdownTime: (state, action) => {
      state.time = action.payload
    },
  },
})

// Export actions
export const { setCountupTime } = countupSlice.actions
export const { setCountdownTime } = countdownSlice.actions

// Combine reducers
const rootReducer = {
  countup: countupSlice.reducer,
  countdown: countdownSlice.reducer,
}

// Persist the reducers
const persistedReducer1 = persistReducer(persistConfig1, rootReducer.countup)
const persistedReducer2 = persistReducer(persistConfig2, rootReducer.countdown)

// Configure store
export const store = configureStore({
  reducer: {
    countup: persistedReducer1,
    countdown: persistedReducer2,
  },
})

// Create persistors
export const persistor1 = persistStore(store)
export const persistor2 = persistStore(store)
