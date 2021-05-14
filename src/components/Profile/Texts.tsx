import React, {useContext} from 'react';
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
import { useHistory } from "react-router-dom";
import {endpoints} from "../../types/endpoints";
import styled from "styled-components";

const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
});

function createData(id: number, title: string, createdAt: string) {
    return {id, title, createdAt};
}

const rows = [
    createData(1, 'Frozen yoghurt', "159",),
    createData(2, 'Ice cream sandwich', "237"),
    createData(3, 'Eclair', "262"),
];

interface IProps {
    className?: string
}

const Element = ({className}: IProps) => {
    const classes = useStyles();
    const history = useHistory();
    const {isAuthorized} = useContext(AuthContext)

    return (
        <TableContainer component={Paper} className={className}>
            <Table className={classes.table} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Create Date</TableCell>
                        {isAuthorized &&<TableCell align="right">Actions</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} onClick={() => history.push(`${endpoints.text + row.id}`)} className={"tab-row-mat"}>
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="right">{row.createdAt}</TableCell>
                            {isAuthorized && <TableCell align="right"><ButtonGroup disableElevation variant="contained"
                                                                   aria-label="outlined primary button group">
                                <Button onClick={() => console.log("edit: " + row.id)} color="primary"
                                        startIcon={<EditIcon/>}/>
                                <Button onClick={() => console.log("delete: " + row.id)} color="secondary"
                                        startIcon={<DeleteIcon/>}/>
                            </ButtonGroup></TableCell>}
                        </TableRow>
                    ))}
                    {[...Array(15 - rows.length)].map((_, i) =>
                        <TableRow key={`empty-${i}`}><TableCell/><TableCell/>{isAuthorized &&<TableCell/>}</TableRow>
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