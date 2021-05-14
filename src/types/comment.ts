import {IUser} from "./user";


export interface IComment {
    id: string,
    textId: string,
    content: string,
    author: IUser,
    createdAt: string,
}