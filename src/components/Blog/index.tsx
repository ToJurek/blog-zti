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
                <Container fixed>
                    <Switch>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/about">
                            XD
                        </Route>
                        <Route exact path="/users">
                            <Users/>
                        </Route>

                        <Route path="/articles">
                            <Articles/>
                        </Route>
                        <Route path="/comments">
                            <CommentSection />
                        </Route>
                        <Route exact path="/user">
                            <Profile />
                        </Route>
                        <Route exact path="/post">
                            <Post />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </AuthContext.Provider>

    )
}

export default Blog;