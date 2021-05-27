import axios from "axios";
import {handleUser} from "../../domain/store/models/authorization";




export const logoutUser = async (token: string) =>
    await axios.post("http://localhost:8000/api/auth/logout", {}, {
        headers: {
            'Authorization': `token ${token}`
        }
    })
        .then(res => res)
        .catch(error =>
            console.log(error)
        );


export const loginUser =  (username: string, password: string) => async (dispatch: any) =>
     await axios.post("http://localhost:8000/api/auth/login", {
        username,
        password
    }).then( res => {
         dispatch(handleUser({
            username: res.data.user.username,
            id: res.data.user.id,
            token: res.data.token
        }))
        window.location.href = "/"
    })
        .catch(error =>
            console.log(error)
        );


