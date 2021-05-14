import {useState} from "react";
import {Avatar, TextField, Typography,Button} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import styled from "styled-components";
import {authorize} from "../../domain/store/models/authorization";
import {useDispatch} from "react-redux";

interface IProps {
    className?: string
}

const Login = ({className}: IProps) => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const dispatch = useDispatch()

    const handleSubmit = () =>  dispatch(authorize(email, password))
    return (<div className={className}>
        <form className={"login-form"} onSubmit={handleSubmit}>
            <div className={"avatar"}>
                <Avatar className={"avatar-header"}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
            </div>


            <TextField id="standard-basic" label="Email" fullWidth type={"email"} className={"mat-input"} onChange={(e) => setEmail(e.target.value)} required/>
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