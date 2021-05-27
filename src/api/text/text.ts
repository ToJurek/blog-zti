import axios from "axios";
import {handleText} from "../../domain/store/models/text";
import {IText} from "../../types/text";
import {endpoints} from "../../types/endpoints";
import {setModalError} from "../../domain/store/models/modalError";


// @ts-ignore
export const getText = (id: string, token: string) => async dispatch =>
    await axios.get("http://localhost:8000/api/blog/" + id, {
        headers: {
            'Authorization': `token ${token}`
        }
    }).then(res => {

            dispatch(handleText({
                id: res.data.blog_id,
                content: res.data.blog_text,
                title: res.data.blog_title,
                createdAt: res.data.created_at,
                author: res.data.author
            }))
        }
    )
        .catch(error =>
            dispatch(setModalError(error.toString()))
        );


export const setText = async ({title, content, author}: IText, token: string) =>
    await axios.post("http://localhost:8000/api/blog/new", {
        blog_title: title,
        blog_text: content,
        author: author,
    }, {
        headers: {
            'Authorization': `token ${token}`
        }
    }).then(res => window.location.href = endpoints.text + res.data.blog_id)
        .catch(error =>
            console.log(error)
        );
