import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IArticle} from "../../../types/article";

const initText: IArticle[] = []

interface IArticlesStore {
    articles: IArticle[]
}


export const initialState: IArticlesStore = {
    articles: initText
}

const articles = createSlice({
    name: "articles",
    initialState,
    reducers: {
        handleArticles: (
            state: IArticlesStore,
            action: PayloadAction<IArticle[]>
        ) => {
            state.articles = action.payload
        }
    }
})

export const {
    handleArticles
} = articles.actions

export const articlesReducer = articles.reducer


