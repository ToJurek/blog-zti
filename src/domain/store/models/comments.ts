import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../../../types/comment";
import {REHYDRATE} from "redux-persist";


interface ICommentsStore {
    comments: IComment[]
}

export const initialState: ICommentsStore = {
    comments: []
}

const comments = createSlice({
    name: "comments",
    initialState,
    reducers: {
        handleComments: (
            state: ICommentsStore,
            action: PayloadAction<IComment[]>
        ) => {
            state.comments = action.payload
        }
    },
    extraReducers: {
        [REHYDRATE]: state => state
    }
})

export const {
    handleComments
} = comments.actions

export const commentsReducer = comments.reducer

