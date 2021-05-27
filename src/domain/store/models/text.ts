import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IText} from "../../../types/text";

const initText: IText = {}

export const initialState: IText = initText

const text = createSlice({
    name: "texts",
    initialState,
    reducers: {
        handleText: (
            state: IText,
            action: PayloadAction<IText>
        ) => {

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            state.id = action.payload.id,
                state.title = action.payload.title,
                state.content = action.payload.content,
                state.createdAt = action.payload.createdAt,
                state.author = action.payload.author,
                state.comments = action.payload.comments
        }
    }
})

export const {
    handleText
} = text.actions

export const textReducer = text.reducer


