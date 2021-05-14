import {Button, TextField} from "@material-ui/core";
import React, {useRef} from "react";
import styled from "styled-components";

interface IProps {
    className?: string
}

const Element = ({className}: IProps) => {

    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className={className}>
            <TextField  label="Comment" fullWidth inputRef={inputRef} />
            <Button onClick={() => console.log(inputRef.current?.value)} variant="contained" color="primary" fullWidth className={"mat-button"}>New Comment</Button>
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