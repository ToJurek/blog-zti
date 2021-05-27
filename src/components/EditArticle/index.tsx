import React, {useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useForm} from "react-hook-form";
import {useTypedSelector} from '../../domain/store';
import {getText, updateText} from "../../api/text/text";
import {useDispatch} from "react-redux";
import { useParams } from 'react-router';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const EditArticle = () => {
    const {register, handleSubmit} = useForm();
    const classes = useStyles();
    const {token, id} = useTypedSelector(state => state.authorization)
    const dispatch = useDispatch()
    const params = useParams()
    useEffect(() => {
        // @ts-ignore
        token && params.id && dispatch(getText(params.id, token))
    }, [])

    const {title, content} = useTypedSelector(state => state.text)
    // @ts-ignore
    const onSubmit = data => updateText({content: data.text, title: data.title, id: params.id}, token);
    console.log(title, content)
    return (
        <Container component="main">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AddIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    New Post
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="title"
                                label="Title"
                                {...register("title")}
                                autoComplete={"title"}
                                defaultValue={title}
                                multiline
                                rows={1}
                                rowsMax={10}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="text"
                                label="Text"
                                {...register("text")}
                                autoComplete="text"
                                defaultValue={content}
                                multiline
                                rows={4}
                                rowsMax={10}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Update!
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default EditArticle