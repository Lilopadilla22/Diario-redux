import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { journaSlice } from './Journal/journalSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journaSlice.reducer
  },
})