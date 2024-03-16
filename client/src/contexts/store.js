import { configureStore, createSlice } from '@reduxjs/toolkit'
<<<<<<< HEAD
// import { PayloadAction } from '@reduxjs/toolkit'
const initialLevelState = { value: { level: 0 } }
=======
const initialState = { value: { level: 0 } }
>>>>>>> 23fd4c6a593bf1fbbc76f462b4f8ae023877aab5

const levelSlice = createSlice({
  name: 'level',
  initialState: initialLevelState,
  reducers: {
    nextLevel: (state, action) => {
      state.value = action.payload
    },
  },
})
const initialScoreState = { value: { score: 0 } }
const scoreLevelSlice = createSlice({
  name: 'score',
  initialState: initialScoreState,
  reducers: {
    scoreUpdate: (state, action) => {
      state.value = action.payload
    },
  },
})
const initialLoginState = { value: { login: false } }
const loginSlice = createSlice({
  name: 'login',
  initialState: initialLoginState,
  reducers: {
    loginUser: (state) => {
      state.value = { login: true }
    },
    logoutUser: (state) => {
      state.value = initialLoginState.value
    },
  },
})
export const { nextLevel } = levelSlice.actions
export const { scoreUpdate } = scoreLevelSlice.actions
export const { loginUser, logoutUser } = loginSlice.actions
export const store = configureStore({
  reducer: {
    level: levelSlice.reducer,
    score: scoreLevelSlice.reducer,
    login: loginSlice.reducer,
  },
})
