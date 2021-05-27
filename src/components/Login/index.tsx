import React, {useState} from "react";
import {Avatar, Button, TextField, Typography} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import {loginUser} from "../../api/user";

interface IProps {
    className?: string
}

const Login = ({className}: IProps) => {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const dispatch = useDispatch()

    return (<div className={className}>
        <form className={"login-form"} onSubmit={async () => await dispatch(loginUser(username, password))}>
            <div className={"avatar"}>
                <Avatar className={"avatar-header"}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
            </div>


            <TextField id="standard-basic" label="Username" fullWidth className={"mat-input"}
                       onChange={(e) => setUsername(e.target.value)} required/>
            <TextField
                required
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
                className={"mat-input"}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={"login-submit"}
            >
                Sign In
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                    <Link href="/signup" variant="body2">
                        No account? Sign up
                    </Link>
                </Grid>
            </Grid>
        </form>

    </div>)
}

const StyledLogin = styled(Login)`
  display: flex;
  justify-content: center;
  margin-top: 40px;


  .login-form {
    .avatar {
      display: grid;
      justify-content: center;

      .avatar-header {
        margin: auto;
        background-color: #3f51b5;
      }
    }

    .mat-input {
      margin-top: 10px;
    }

    .login-submit {
      margin-top: 30px;
    }
  }
`

export default StyledLogin