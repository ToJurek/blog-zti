import {IComment} from "./comment";

export interface IText {
    id?: string,
    title?: string,
    content?: string,
    author?: string,
    createdAt?: string
    comments?: IComment[]
}