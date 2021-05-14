import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {AuthContext} from "../hooks/authHook";
import {endpoints} from "../../types/endpoints";
import styled from "styled-components";
import {useTypedSelector} from "../../domain/store";
import {IUser} from "../../types/user";
import {setUser} from "../../domain/store/models/user";
import {useDispatch} from "react-redux";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

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
    const {isAuthorized} = useContext(AuthContext)
    let users = useTypedSelector(state => state.users);
    const dispatch = useDispatch()
    let user = useTypedSelector(state => state.user)
    const handleClick = async (user:IUser) => {
        await dispatch(setUser(user))
        window.location.href = "/v1/user"

    }

    return (
        <TableContainer component={Paper} className={className}>
            <Table className={classes.table} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Surname</TableCell>
                        <TableCell align="right">Articles</TableCell>
                        <TableCell align="right">Last Article</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id} onClick={() => handleClick(user)} className={"tab-row-mat"}>
                            <TableCell component="th" scope="row">
                                {user.name}
                            </TableCell>
                            <TableCell align="right">{user.surname}</TableCell>
                            <TableCell align="right">{user.articles}</TableCell>
                            <TableCell align="right">{user.lastActivity}</TableCell>
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
export default Users;