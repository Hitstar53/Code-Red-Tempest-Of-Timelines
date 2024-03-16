import { configureStore, createSlice } from '@reduxjs/toolkit'
// import { PayloadAction } from '@reduxjs/toolkit'
<<<<<<< HEAD
const initialLevelState = { value: { level: 10 } }
=======
const initialLevelState = { value: { level: 8 } }
>>>>>>> ab49b10425dc3d041d2513bad77e7e018715d68e

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
const initialLoginState = { value: { login: true } }
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
