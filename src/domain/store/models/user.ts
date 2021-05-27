import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../types/user";
import {REHYDRATE} from 'redux-persist'

const initUser: IUser = {}

export const initialState: IUser = initUser

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        handleCurrentUser: (
            state: IUser,
            action: PayloadAction<IUser>
        ) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            state.username = action.payload.username,
                state.email = action.payload.email,
                state.articles = action.payload.articles
            state.blogs = action.payload.blogs
        }
    },
    extraReducers: {
        [REHYDRATE]: state => state
    }
})

export const {
    handleCurrentUser
} = user.actions

export const userReducer = user.reducer


