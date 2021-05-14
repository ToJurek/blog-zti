import axios from "axios";
import {endpoints} from "../../types/endpoints";

export const authorizeUser = async (email: string, password: string) =>
    axios.post(endpoints.authorization, {
        email,
        password
    })
        .then(res => res.data)
        .catch(error =>
            console.log(error)
        );