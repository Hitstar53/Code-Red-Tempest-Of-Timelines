import { configureStore, createSlice } from '@reduxjs/toolkit'
const initialCountupState = { value: { time: 0 } }

const countupSlice = createSlice({
  name: 'countup',
  initialState: initialCountupState,
  reducers: {
    countup: (state, action) => {
      state.value = action.payload
    },
  },
})
const initialCountdownState = { value: { time: 7200 } }
const countdownSlice = createSlice({
  name: 'countdown',
  initialState: initialCountdownState,
  reducers: {
    countdown: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { countup } = countupSlice.actions
export const { countdown } = countdownSlice.actions

export const store = configureStore({
  reducer: {
    countup: countupSlice.reducer,
    countdown: countdownSlice.reducer,
  },
})
