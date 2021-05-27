import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {REHYDRATE} from "redux-persist";

export const initialState = {
    blogName: "Blog"
}

interface IState {
    blogName: string
}

const blog = createSlice({
    name: "blog",
    initialState,
    reducers: {
        changeBlogName: (
            state: IState,
            action: PayloadAction<string>
        ) => {
            state.blogName = action.payload
        }
    },
    extraReducers: {
        [REHYDRATE]: state => state
    }
})

export const {
    changeBlogName
} = blog.actions

export const blogReducer = blog.reducer

// @ts-ignore
export const changeName = (name: string) => async dispatch => {
    dispatch(changeBlogName(name))
}
