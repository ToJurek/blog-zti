import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../types/user";

const initUser: IUser = {
    id: "",
    name: "",
    surname: "",
    email: ""
}

export const initialState: IUser = initUser

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        handleUser: (
            state: IUser,
            action: PayloadAction<IUser>
        ) => {
            state = action.payload
        }
    }
})

export const {
    handleUser
} = user.actions

export const userReducer = user.reducer

// @ts-ignore
export const setUser = (user: IUser) => async dispatch => {
    dispatch(handleUser(user))
}

// @ts-ignore
export const clearUser = (user: IUser) => async dispatch => {
    dispatch(handleUser(initUser))
}
