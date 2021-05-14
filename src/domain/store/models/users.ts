import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../types/user";
import {HYDRATE} from "next-redux-wrapper";

const initUser: IUser[] = [{
    id: "1",
    name: "Author 1",
    surname: "Author 1",
    email: "author@email.com",
    lastActivity: new Date().toDateString(),
    articles: "1"
}, {
    id: "2",
    name: "Author 2",
    surname: "Author 2",
    email: "author2@email.com",
    lastActivity: new Date().toDateString(),
    articles: "1"
}]

export const initialState: IUser[] = initUser

const users = createSlice({
    name: "users",
    initialState,
    reducers: {
        handleUsers: (
            state: IUser[],
            action: PayloadAction<IUser[]>
        ) => {
            state = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (_state, action) => action.payload.users
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

