import axios from "axios";
import {IArticle} from "../../types/article";
import {handleArticles} from "../../domain/store/models/articles";


// @ts-ignore
export const getArticles = (token: string) => async dispatch =>
    await axios.get("http://localhost:8000/api/blog", {
        headers: {
            'Authorization': `token ${token}`
        }
    }).then(res => {
            const mappedArticles: IArticle[] = mapArticles(res.data)
            dispatch(handleArticles(mappedArticles))
        }
    )
        .catch(error =>
            console.log(error)
        );

// @ts-ignore
const mapArticles = (articles: any) => articles.map(article => ({
    id: article.blog_id,
    title: article.blog_title,
    createdAt: article.created_at,
    author: article.author,
    comments: article.comments.length
}))