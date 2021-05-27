import {Button, TextField} from "@material-ui/core";
import React, {useRef} from "react";
import styled from "styled-components";
import {setComment} from "../../api/comments";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../domain/store";

interface IProps {
    className?: string
}

const Element = ({className}: IProps) => {

    // @ts-ignore
    const {id} = useParams()
    const auth = useTypedSelector(state => state.authorization)
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className={className}>
            <TextField label="Comment" fullWidth inputRef={inputRef}/>
            <Button onClick={() => auth.token && setComment({
                content: inputRef.current?.value,
                textId: id,
                author: auth.id
            }, auth.token)} variant="contained" color="primary" fullWidth className={"mat-button"}>New Comment</Button>
        </div>
    )
}

const InputComment = styled(Element)`
  display: inline;

  .mat-button {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`

export default InputComment