import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name: 'user',
  initialState: {
    authenticated: false,
    userInfo: {},
  },
  reducers: {
    setAuthenticated: (state, action) => {
      state.authenticated = action.payload
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    updateUserInfo: (state, action) => {
      state.userInfo = {...state.userInfo, ...action.payload}
    }
  },
  devTools: false
})


export const getUserState = (state) => state.user

export default user