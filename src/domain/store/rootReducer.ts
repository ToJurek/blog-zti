import {combineReducers} from "@reduxjs/toolkit"
import {blogReducer} from "./models/blog";
// import {pageDataReducers} from ""

const rootReducer = combineReducers({
    blog: blogReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer