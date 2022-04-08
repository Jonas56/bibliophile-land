import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/booksSlice'
import userReducer from './slices/userSlice'
import authReducer from './slices/authSlice'

export const store = configureStore({
  reducer: {
    books: booksReducer,
    user:userReducer,
    auth:authReducer
  },
})

