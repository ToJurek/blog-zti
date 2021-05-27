import axios from "axios";
import {endpoints} from "../../types/endpoints";
import {IComment} from "../../types/comment";
import {handleComments} from "../../domain/store/models/comments";


// @ts-ignore
export const getComments = (articleId: string, token: string) => async dispatch =>
    await axios.get("http://localhost:8000/api/comments", {
        headers: {
            'Authorization': `token ${token}`
        }
    }).then(res => {
            const comments = getCommentsByArticleId(res.data, articleId)
            dispatch(handleComments(comments))
        }
    )
        .catch(error =>
            console.log(error)
        );


export const setComment = async ({textId, content, author}: IComment, token: string) =>
    await axios.post("http://localhost:8000/api/comments", {
        comment_text: content,
        blog: textId,
        author: author,
    }, {
        headers: {
            'Authorization': `token ${token}`
        }
    }).then(res => window.location.href = endpoints.text + res.data.blog)
        .catch(error =>
            console.log(error)
        );


// @ts-ignore
const getCommentsByArticleId = (comments, id) => comments.filter(comment => comment.blog === id).map(comment => ({
    id: comment.id,
    author: comment.author,
    content: comment.comment_text,
    textId: comment.blog
}))