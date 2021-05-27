import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IModalError} from "../../../types/modalError";
import {REHYDRATE} from "redux-persist";


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
            action: PayloadAction<string>
        ) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            state.isModalError = true,
                state.message = action.payload
        }
    },
    extraReducers: {
        [REHYDRATE]: state => state
    }
})

export const {
    setModalError
} = modalError.actions

export const modalErrorReducer = modalError.reducer
