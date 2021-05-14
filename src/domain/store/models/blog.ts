import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";

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
        [HYDRATE]: (_state, action) => action.payload.blog
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
