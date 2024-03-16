import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
const initialState = { value: { level: 0 } }

const levelSlice = createSlice({
  name: 'level',
  initialState,
  reducers: {
    nextLevel: (state, action) => {
      state.value = action.payload
    },
  },
})
export const { nextLevel } = levelSlice.actions
export const store = configureStore({
  reducer: {
    level: levelSlice.reducer,
  },
})
