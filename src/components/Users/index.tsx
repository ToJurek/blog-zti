import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { withRouter} from "react-router-dom";
import styled from "styled-components";
import {useTypedSelector} from "../../domain/store";
import {useDispatch} from "react-redux";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {getUsers} from "../../api/user/user";

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

    const dispatch = useDispatch()
    let {users} = useTypedSelector(state => state.users);
    useEffect(() => {
        dispatch(getUsers())
    }, [])


    return (
        <TableContainer component={Paper} className={className}>
            <Table className={classes.table} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Articles</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {console.log(users)}
                    {users.map((user) => (
                        <TableRow className={"tab-row-mat"}>
                            <TableCell component="th" scope="row">
                                {user.username}
                            </TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            <TableCell align="right">{!!user.articles}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const Users = styled(Element)`
  .tab-row-mat:hover {
    background-color: #eee3e3;
  }
`

// @ts-ignore
export default withRouter(Users);