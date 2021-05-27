import axios from "axios";
import {endpoints} from "../../types/endpoints";
import {handleUser} from "../../domain/store/models/authorization";

interface IProps {
    email: string,
    password: string,
    username: string,
}

// @ts-ignore
export const createUser = ({email, password, username}: IProps) => async dispatch =>
    await axios.post(endpoints.createUser, {
        email,
        password,
        username
    }).then(res => {
        dispatch(handleUser({username: res.data.user.username, id: res.data.user.id.toString(), token: res.data.token}))
        window.location.href = "/"
    })
        .catch(error =>
            console.log(error)
        );
