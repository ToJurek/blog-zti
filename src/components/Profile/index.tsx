import {Grid} from "@material-ui/core";
import styled from "styled-components";
import Texts from "./Texts"
import {useEffect, useState} from "react";
import UserCart from "./UserCart";
import ProfileModal from "./ProfileModal";
import {useParams, withRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getUser} from "../../api/user";
import {useTypedSelector} from "../../domain/store";


interface IProps {
    className?: string
}

const Element = ({className}: IProps) => {

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const user = useTypedSelector(state => state.user)
    const {token} = useTypedSelector(state => state.authorization)
    // @ts-ignore
    let {id} = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        token && dispatch(getUser(id, token))
    })
    // const isEditView = isAuthorized && (currentUserId === loggedUserId) && isEditing
    return (
        <div><ProfileModal isOpen={isEditing} setOpen={setIsEditing}/>
            <Grid container spacing={3} className={className}>
                <Grid item xs={6}>
                    <Texts/>
                </Grid>
                <Grid item xs={6}>
                    <UserCart username={user.username} email={user.email}/>
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