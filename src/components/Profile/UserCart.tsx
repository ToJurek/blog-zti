import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import React from "react";
import styled from "styled-components";


interface IProps {
    className?: string,
    username?: string,
    email?: string
}

const Element = ({className, email, username}: IProps) => {
    return (
        <TableContainer component={Paper} className={className}>
            <Table aria-label="caption table">
                <TableHead>
                    User
                </TableHead>
                <TableBody>

                    <TableRow>
                        <TableCell component="th" scope="row">
                            Name:
                        </TableCell>
                        <TableCell align="right">{username}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Email:
                        </TableCell>
                        <TableCell align="right">{email}</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    )
}

const UserCart = styled(Element)`
`

export default UserCart