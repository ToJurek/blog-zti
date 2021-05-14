import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../types/user";
import {IText} from "../../../types/text";

const initText: IText[] = [{
    id: "1",
    title: "Fly somewhere",
    words: "300",
    content: "",
    author: {
        id: "10",
        name: "Author",
        surname: "Author",
        email: "author@author.com"
    },
    comments: [],
    createdAt: new Date().toDateString()

}]

export const initialState: IText[] = initText

const texts = createSlice({
    name: "texts",
    initialState,
    reducers: {
        handleTexts: (
            state: IText[],
            action: PayloadAction<IText[]>
        ) => {
            state = action.payload
        }
    }
})

export const {
    handleTexts
} = texts.actions

export const textsReducer = texts.reducer

// @ts-ignore
export const setTexts = (texts: IText[]) => async dispatch => {
    dispatch(handleTexts(texts))
}

