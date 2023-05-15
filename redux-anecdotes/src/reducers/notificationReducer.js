import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    changeNotification(state, action) {
      if (action.payload) {
        return "you voted '" + action.payload + "'"
      }
      else {
        return null
      }
    }
  }
})

export const { changeNotification } = notificationSlice.actions
export default notificationSlice.reducer