import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import {
    Link
} from "react-router-dom";
import CustomLink from '../CustomLink';
interface IProps {
    className?: string
}

const CustomMenu = ({className}: IProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={className}>
            <IconButton edge="start" className="icon-button" color="inherit" aria-label="menu" onClick={handleClick}>
                <MenuIcon/>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem><CustomLink to="/authors">Authors</CustomLink></MenuItem>
                <MenuItem><CustomLink to="/add">New Text</CustomLink></MenuItem>
                <MenuItem><CustomLink to="/texts">Texts</CustomLink></MenuItem>
            </Menu>
        </div>
    );
}

const StyledCustomMenu = styled(CustomMenu)`

`

export default StyledCustomMenu


