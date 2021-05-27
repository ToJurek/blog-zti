import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {useHistory} from "react-router-dom";
import {endpoints} from "../../types/endpoints";
import styled from "styled-components";
import {useTypedSelector} from "../../domain/store";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {getArticles} from "../../api/text/articles";

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
    const dispatch = useDispatch()
    let {articles} = useTypedSelector(state => state.articles);
    const {token} = useTypedSelector(state => state.authorization);
    const handleClick = (textId: string) => {
        history.push(endpoints.text + textId)
    }

    useEffect(() => {
        token && dispatch(getArticles(token))
    }, [])

    return (
        <TableContainer component={Paper} className={className}>
            <Table className={classes.table} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Author</TableCell>
                        <TableCell align="right">Comments</TableCell>
                        <TableCell align="right">Created At</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {articles.map((text) => (
                        <TableRow key={text.id} onClick={() => text.id && handleClick(text.id)}
                                  className={"tab-row-mat"}>
                            <TableCell component="th" scope="row">
                                {text.title}
                            </TableCell>
                            <TableCell align="right">{`${text.author}`}</TableCell>
                            <TableCell align="right">{text.comments}</TableCell>
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