import React, {useContext, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button, ButtonGroup} from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import {AuthContext} from "../hooks/authHook";
import {useHistory} from "react-router-dom";
import {endpoints} from "../../types/endpoints";
import styled from "styled-components";
import {useTypedSelector} from '../../domain/store';
import {deleteText} from "../../api/text/text";
import {getArticles} from "../../api/text/articles";
import { useDispatch } from 'react-redux';

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
    const dispatch = useDispatch()
    const {username, token} = useTypedSelector(state => state.authorization)
    useEffect(() => {
        token && dispatch(getArticles(token))
    }, [])
    const {articles} = useTypedSelector(state => state.articles)
    const usersArticles = articles.filter(article => article.author === username)

    return (
        <TableContainer component={Paper} className={className}>
            <Table className={classes.table} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Create Date</TableCell>
                        {isAuthorized && <TableCell align="right">Actions</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usersArticles.map((row) => (
                        <TableRow key={row.id}
                                  className={"tab-row-mat"}>
                            <TableCell component="th" scope="row" onClick={() => history.push(`${endpoints.text + row.id}`)}>
                                {row.title}
                            </TableCell>
                            <TableCell align="right">{row.createdAt}</TableCell>
                            {isAuthorized && <TableCell align="right"><ButtonGroup disableElevation variant="contained"
                                                                                   aria-label="outlined primary button group">
                                <Button onClick={() => console.log("edit: " + row.id)} color="primary"
                                        startIcon={<EditIcon/>}/>
                                <Button onClick={() => deleteText(row.id, token)} color="secondary"
                                        startIcon={<DeleteIcon/>}/>
                            </ButtonGroup></TableCell>}
                        </TableRow>
                    ))}
                    {[...Array(15 - articles.length)].map((_, i) =>
                        <TableRow key={`empty-${i}`}><TableCell/><TableCell/>{isAuthorized && <TableCell/>}</TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const Texts = styled(Element)`
  .tab-row-mat:hover {
    background-color: #eee3e3;
  }
`

export default Texts

