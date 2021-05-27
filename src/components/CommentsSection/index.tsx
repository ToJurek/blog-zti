import Comments from "./Comments";
import styled from "styled-components";
import React from "react";
import InputComment from "./InputComments";

interface IProps {
    className?: string
}

const Element = ({className}: IProps) => {
    return (
        <div style={{padding: 14}} className={className}>
            <h1>Comments</h1>
            <InputComment/>
            <Comments/>
        </div>
    )
}

const CommentSection = styled(Element)``

export default CommentSection