import { configureStore } from '@reduxjs/toolkit'
import { blogReducer } from './reducers/blogReducer'
import { jobApplicationReducers } from './reducers/jobApplicationReducer'

export const server = "http://localhost:5000/api"

export const store = configureStore({
    reducer: {
        blog: blogReducer,
        jobApplication:jobApplicationReducers
    },
})


