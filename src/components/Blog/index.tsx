import {useDispatch} from "react-redux";
import {changeName} from "../../domain/store/models/blog";
import React from "react";
import {useTypedSelector} from "../../domain/store";


const Blog = () => {
    const dispatch = useDispatch()
    const blogName = useTypedSelector(state => state.blog.blogName)
    return (
        <div onClick={() => dispatch(changeName("Blog 1"))}>
            {blogName}
        </div>
    )
}

export default Blog