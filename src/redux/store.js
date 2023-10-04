import { configureStore } from '@reduxjs/toolkit'
import { blogReducer } from './reducers/blogReducer'

export const server = "http://localhost:5000/api"

export const store = configureStore({
    reducer: {
        blog: blogReducer,
    },
})


