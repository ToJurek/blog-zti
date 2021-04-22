import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
