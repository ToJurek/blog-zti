import axios from "axios";
import {handleUser} from "../../domain/store/models/authorization";
import {handleUsers} from "../../domain/store/models/users";
import {handleCurrentUser} from "../../domain/store/models/user";

export const logoutUser = async (token: string) =>
    await axios.post("api/auth/logout", {}, {
        headers: {
            'Authorization': `token ${token}`
        }
    })
        .then(res => res)
        .catch(error =>
            console.log(error)
        );


// @ts-ignore
export const loginUser = (username: string, password: string) => async dispatch => {
    console.log(username, password)
    await axios.post("http://localhost:8000/api/auth/login", {
        username,
        password
    }).then(res => {
        console.log(res.data)
        dispatch(handleUser({
            username: res.data.user.username,
            id: res.data.user.id.toString(),
            token: res.data.token
        }))
        window.location.href = "/"
    })
        .catch(error =>
            console.log(error)
        );
}

// @ts-ignore
export const getUsers = () => async dispatch =>
    await axios.get("http://localhost:8000/api/auth/user").then(res => {
            // @ts-ignore
            const users = res.data.map(user => (
                {
                    username: user.username,
                    email: user.email,
                    articles: user.blog
                }
            ))
            // @ts-ignore
            dispatch(handleUsers(users))
        }
    )
        .catch(error =>
            console.log(error)
        );

// @ts-ignore
export const getUser = (id: string, token: string) => async dispatch =>
    await axios.get("http://localhost:8000/api/auth/user/" + id, {
        headers: {
            'Authorization': `token ${token}`
        }
    }).then(res => {

            // @ts-ignore
            dispatch(handleCurrentUser({username: res.data.username, email: res.data.email, articles: res.data.articles}))
        }
    )
        .catch(error =>
            console.log(error)
        );
