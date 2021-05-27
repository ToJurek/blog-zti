import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuthorization} from "../../../types/authorization";
import {REHYDRATE} from "redux-persist";
import {logoutUser} from "../../../api/user";

const user: IAuthorization = {
    id: "",
    username: "",
    token: ""
}

export const initialState: IAuthorization = {
    id: "",
    username: "",
    token: ""
}


const authorization = createSlice({
    name: "authorization",
    initialState,
    reducers: {
        handleUser: (
            state: IAuthorization,
            action: PayloadAction<IAuthorization>
        ) => {
            state.username = action.payload.username
            state.token = action.payload.token
            state.id = action.payload.id
            console.log(state)
        }
    },
    extraReducers: {
        [REHYDRATE]: state => state
    }
})

export const {
    handleUser
} = authorization.actions

export const authorizationReducer = authorization.reducer


// @ts-ignore
export const logout = () => async (dispatch, getState) => {
    console.log("logout")
    const token = getState().authorization.token
    dispatch(handleUser(user))
    await logoutUser(token)
}
