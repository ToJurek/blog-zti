import {Backdrop, Button, Grid, Modal} from "@material-ui/core";
import styled from "styled-components";
import Texts from "./Texts"
import {useContext, useState} from "react";
import {AuthContext} from "../hooks/authHook";
import {useTypedSelector} from "../../domain/store";
import UserCart from "./UserCart";
import ProfileModal from "./ProfileModal";
import {withRouter} from "react-router-dom";


interface IProps {
    className?: string
}

const Element = ({className}: IProps) => {

    const [isEditing, setIsEditing] = useState<boolean>(false)

    const {isAuthorized} = useContext(AuthContext);
    const currentUserId = useTypedSelector(state => state.user.id);
    const loggedUserId = useTypedSelector(state => state.authorization.id);
    const isEditView = isAuthorized && (currentUserId === loggedUserId) && isEditing
    return (
        <div><ProfileModal isOpen={isEditing} setOpen={setIsEditing} />
        <Grid container spacing={3} className={className}>
            <Grid item xs={6}>
                <Texts/>
            </Grid>
            <Grid item xs={6}>
                <UserCart/>
                <Button fullWidth className={"button-edit-profile"} variant="contained" color="primary"
                        onClick={() => setIsEditing(true)}>Edit Profile</Button>
            </Grid>

        </Grid></div>
    )
}

const Profile = styled(Element)`
  .button-edit-profile {
    margin-top: 15px;
  }
`

// @ts-ignore
export default withRouter(Profile)