import {combineReducers} from "@reduxjs/toolkit"
import {blogReducer} from "./models/blog";
import {authorizationReducer} from "./models/authorization";
import {userReducer} from "./models/user";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {textReducer} from "./models/text";
import {usersReducer} from "./models/users";
import {commentsReducer} from "./models/comments";
import {articlesReducer} from "./models/articles";
import {modalErrorReducer} from "./models/modalError";
// import {pageDataReducers} from ""

const rootReducer = combineReducers({
    blog: blogReducer,
    authorization: authorizationReducer,
    user: userReducer,
    users: usersReducer,
    text: textReducer,
    comments: commentsReducer,
    articles: articlesReducer,
    modalError: modalErrorReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authorization'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof persistedReducer>

export default persistedReducer