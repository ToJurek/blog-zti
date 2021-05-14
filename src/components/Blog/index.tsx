import React from "react";
import {useTypedSelector} from "../../domain/store";
import Navbar from "../Navabar";
import {
    BrowserRouter as Router,
    Switch,
    Route, withRouter,
} from "react-router-dom";
import {AuthContext} from "../hooks/authHook"
import Login from "../Login";
import Users from "../Users";
import {Container} from "@material-ui/core";
import Profile from "../Profile";
import Articles from "../Articles";
import CommentSection from "../CommentsSection";
import Post from "../Post"

const Blog = () => {

    return (
        <AuthContext.Provider value={{isAuthorized: !!useTypedSelector(state => state.authorization.email)}}>
            <Router>
                <Navbar/>
            </Router>
        </AuthContext.Provider>

    )
}

export default Blog;