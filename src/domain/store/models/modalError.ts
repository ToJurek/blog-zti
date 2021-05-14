import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IModalError} from "../../../types/modalError";


export const initialState: IModalError = {
    isModalError: false,
    message: ""
}


const modalError = createSlice({
    name: "modalError",
    initialState,
    reducers: {
        setModalError: (
            state: IModalError,
            action: PayloadAction<IModalError>
        ) => {
            state = action.payload
        }
    }
})

export const {
    setModalError
} = modalError.actions

export const modalErrorReducer = modalError.reducer

// @ts-ignore
export const clearModalError = () => async dispatch => {
    dispatch(setModalError({isModalError: false, message: ""}))
}

// @ts-ignore
export const setLoginModalError = () => async dispatch => {
    const message = "You have entered an invalid email or password"
    dispatch(setModalError({isModalError: false, message}))
}
