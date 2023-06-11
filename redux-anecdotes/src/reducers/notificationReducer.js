import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    changeNotification: {
      reducer: (state, action) => {
        if (action.payload.text) {
          return {
            content: "you voted '" + action.payload.text + "'",
            timeout: action.payload.timeout
          }
        }
        else {
          return null
        }
      },
      prepare: (text, time_in_seconds) => {
        return {
          payload: {
            text: text,
            timeout: time_in_seconds * 1000,
          }
        }
      }
    }
  }
})

export const { changeNotification } = notificationSlice.actions
export default notificationSlice.reducer