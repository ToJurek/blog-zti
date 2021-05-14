import {IUser} from "./user";
import {IComment} from "./comment";

export interface IText {
    id: string,
    title: string,
    words: string,
    content: string,
    author: IUser,
    comments: IComment[],
    createdAt: string
}