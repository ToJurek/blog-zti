import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../../../types/comment";
import {IUser} from "../../../types/user";

export const initialState: IComment[] = [
    {
        id: "1",
        textId: "1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean",
        author: {
            id: "Author",
            name: "Author",
            surname: "Author",
            email: ""
        },
        createdAt: new Date().toString(),
    },
    {
        id: "1",
        textId: "1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean",
        author: {
            id: "Author",
            name: "Author",
            surname: "Author",
            email: ""
        },
        createdAt: new Date().toString(),
    }, {
        id: "1",
        textId: "1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean",
        author: {
            id: "Author",
            name: "Author",
            surname: "Author",
            email: ""
        },
        createdAt: new Date().toString(),
    }
]


const comments = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setComments: (
            state: IComment[],
            action: PayloadAction<IComment[]>
        ) => {
            state = action.payload
        }
    }
})

export const {
    setComments
} = comments.actions

export const commentsReducer = comments.reducer

