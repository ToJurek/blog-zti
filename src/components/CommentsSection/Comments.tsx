import React from "react";
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import styled from "styled-components";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useTypedSelector} from "../../domain/store";

const imgLink =
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

interface IProps {
    className?: string
}

const Element = ({className}: IProps) => {

    const comments = useTypedSelector(state => state.comments)
    return (

            <Paper style={{ padding: "40px 20px" }} className={className}>
                {comments.map(comment => <><Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>
                            <AccountCircleIcon/></Avatar>
                    </Grid>
                    <Grid>
                        <h4 style={{margin: 0, textAlign: "left"}}>{comment.author.name} {comment.author.surname}</h4>
                        <p style={{textAlign: "left"}}>
                            {comment.content}
                        </p>
                        <p style={{textAlign: "left", color: "gray"}}>
                            posted {comment.createdAt}
                        </p>
                    </Grid>

                </Grid> <Divider variant="fullWidth" style={{ margin: "30px 0" }} /></>)}
            </Paper>
    );
}

const Comments = styled(Element)``

export default Comments


