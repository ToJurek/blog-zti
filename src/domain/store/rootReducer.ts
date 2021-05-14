import {combineReducers} from "@reduxjs/toolkit"
import {blogReducer} from "./models/blog";
import {authorizationReducer} from "./models/authorization";
import {userReducer} from "./models/user";

import {textsReducer} from "./models/texts";
import {usersReducer} from "./models/users";
import {commentsReducer} from "./models/comments";
// import {pageDataReducers} from ""

const rootReducer = combineReducers({
    blog: blogReducer,
    authorization: authorizationReducer,
    user: userReducer,
    users: usersReducer,
    texts: textsReducer,
    comments: commentsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer