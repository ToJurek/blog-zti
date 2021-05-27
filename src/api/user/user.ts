import axios from "axios";
import {handleUsers} from "../../domain/store/models/users";
import {handleCurrentUser} from "../../domain/store/models/user";


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
            dispatch(handleCurrentUser({username: res.data.username, email: res.data.email, articles: res.data.articles}))
        }
    )
        .catch(error =>
            console.log(error)
        );