import React from "react";
import {Avatar, Divider, Grid, Paper} from "@material-ui/core";
import styled from "styled-components";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useTypedSelector} from "../../domain/store";

interface IProps {
    className?: string
}

const Element = ({className}: IProps) => {

    const {comments} = useTypedSelector(state => state.comments)
    return (
        <Paper style={{padding: "40px 20px"}} className={className}>
            {comments.map(comment => <><Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    <Avatar>
                        <AccountCircleIcon/></Avatar>
                </Grid>
                <Grid>
                    <h4 style={{margin: 0, textAlign: "left"}}>{comment.author}</h4>
                    <p style={{textAlign: "left"}}>
                        {comment.content}
                    </p>
                </Grid>

            </Grid> <Divider variant="fullWidth" style={{margin: "30px 0"}}/></>)}
        </Paper>
    );
}

const Comments = styled(Element)``

export default Comments


