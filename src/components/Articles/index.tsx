import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {AuthContext} from "../hooks/authHook";
import {useHistory, withRouter} from "react-router-dom";
import {endpoints} from "../../types/endpoints";
import styled from "styled-components";
import {useTypedSelector} from "../../domain/store";
import {IUser} from "../../types/user";
import {setUser} from "../../domain/store/models/user";
import {useDispatch} from "react-redux";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {IText} from "../../types/text";

const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
});

interface IProps {
    className?: string
}

const Element = ({className}: IProps) => {
    const classes = useStyles();
    const history = useHistory();
    const {isAuthorized} = useContext(AuthContext)
    let texts = useTypedSelector(state => state.texts);
    const dispatch = useDispatch()
    const handleClick = async (text:IText) => {
        await history.push(endpoints.text + text.id)
    }

    return (
        <TableContainer component={Paper} className={className}>
            <Table className={classes.table} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Author</TableCell>
                        <TableCell align="right">Comments</TableCell>
                        <TableCell align="right">Words</TableCell>
                        <TableCell align="right">Created At</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {texts.map((text) => (
                        <TableRow key={text.id} onClick={() => handleClick(text)} className={"tab-row-mat"}>
                            <TableCell component="th" scope="row">
                                {text.title}
                            </TableCell>
                            <TableCell align="right">{`${text.author.name} ${text.author.surname}`}</TableCell>
                            <TableCell align="right">{text.comments.length}</TableCell>
                            <TableCell align="right">{text.words}</TableCell>
                            <TableCell align="right">{text.createdAt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const Articles = styled(Element)`
  .tab-row-mat:hover {
    background-color: #eee3e3;
  }
`

export default Articles;