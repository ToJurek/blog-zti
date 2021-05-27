import React, {useContext} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import {logout} from "../../domain/store/models/authorization";
import {useTypedSelector} from "../../domain/store";
import {useDispatch} from "react-redux";
import CustomMenu from "./Menu"
import {Menu} from '@material-ui/core';
import CustomLink from "../CustomLink";
import {AuthContext} from "../hooks/authHook";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginBottom: 15
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export default function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const auth = useTypedSelector(state => state.authorization.token)

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const dispatch = useDispatch()
    const isAuth = useContext(AuthContext)
    const {id} = useTypedSelector(state => state.authorization)
    return (
        <div className={classes.root}>
            {isAuth.isAuthorized}
            <AppBar position="static">
                <Toolbar>
                    <CustomMenu/>
                    <Typography variant="h6" className={classes.title}>
                        ZTI Blog
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                // onClose={handleClose}
                            >
                                <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
                                {isAuth.isAuthorized && <><MenuItem><CustomLink to={"/user/" + id}>Your
                                    Account</CustomLink></MenuItem>
                                    <MenuItem><CustomLink to="/text/account">Menage Text</CustomLink></MenuItem> </>}
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
