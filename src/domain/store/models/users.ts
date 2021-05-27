import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../types/user";
import {REHYDRATE} from "redux-persist";

interface IUserState {
    users: IUser[]
}

export const initialState = {
    users: [{username: "test", email: "email", articles: ""}]
}

const users = createSlice({
    name: "users",
    initialState,
    reducers: {
        handleUsers: (
            state: IUserState,
            action: PayloadAction<IUser[]>
        ) => {
            state.users = action.payload
        }
    },
    extraReducers: {
        [REHYDRATE]: state => state
    }
})

export const {
    handleUsers
} = users.actions

export const usersReducer = users.reducer

// @ts-ignore
export const setUsers = (users: IUser[]) => async dispatch => {
    dispatch(handleUsers(users))
}

