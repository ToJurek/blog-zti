import React from "react";
import {useTypedSelector} from "../../domain/store";
import Navbar from "../Navabar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AuthContext} from "../hooks/authHook"
import Login from "../Login";
import Users from "../Users";
import {Container} from "@material-ui/core";
import Profile from "../Profile";
import Articles from "../Articles";
import CommentSection from "../CommentsSection";
import Post from "../Post"
import SignupForm from "../Signup";
import Add from "../Add";
import {getUsers} from "../../api/user";
import {useDispatch} from "react-redux";
import ModalError from "../ModalError";

const Blog = () => {

    const dispatch = useDispatch()
    dispatch(getUsers())

    return (
        <AuthContext.Provider value={{isAuthorized: !!useTypedSelector(state => state.authorization.token)}}>
            <Router>
                <Navbar/>
                <ModalError/>
                <Container fixed>
                    <Switch>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/add">
                            <Add/>
                        </Route>
                        <Route exact path="/authors">
                            <Users/>
                        </Route>

                        <Route path="/articles">
                            <Articles/>
                        </Route>
                        <Route path="/comments">
                            <CommentSection/>
                        </Route>
                        <Route exact path="/user/:id">
                            <Profile/>
                        </Route>
                        <Route exact path="/post/:id">
                            <Post/>
                        </Route>
                        <Route exact path="/signup">
                            <SignupForm/>
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </AuthContext.Provider>

    )
}

export default Blog;