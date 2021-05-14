import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuthorization} from "../../../types/authorization";
import {endpoints} from "../../../types/endpoints";
import {HYDRATE} from "next-redux-wrapper";

const user: IAuthorization = {
    id: "",
    name: "",
    surname: "",
    email: "",
    isAdmin: false
}

export const initialState: IAuthorization = user


const authorization = createSlice({
    name: "authorization",
    initialState,
    reducers: {
        handleUser: (
            state: IAuthorization,
            action: PayloadAction<IAuthorization>
        ) => {
            state = action.payload
        },
    },
    extraReducers: {
        [HYDRATE]: (_state, action) => action.payload.authorization
    }
})

export const {
    handleUser
} = authorization.actions

export const authorizationReducer = authorization.reducer

// @ts-ignore
export const authorize = (email: string, password: string) => async dispatch => {
    // const user = await authorizeUser(email, password);
    // user ? dispatch(handleUser(user)) : setLoginModalError()
    window.location.href = `${endpoints.userProfile}?id=1`
}

// @ts-ignore
export const logout = () => async dispatch => {
    console.log("logout")
    dispatch(handleUser(user))
}
