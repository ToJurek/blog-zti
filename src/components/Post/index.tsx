import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Paper} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {getText} from "../../api/text/text";
import {useTypedSelector} from '../../domain/store';
import Comments from "../CommentsSection/index";
import {getComments} from "../../api/comments";

const useStyles = makeStyles((theme) => ({
    post: {
        backgroundColor: "#E8E8E8",
        minHeight: "85vh",
    },
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function FeaturedPost() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const {token} = useTypedSelector(state => state.authorization)
    const post = useTypedSelector(state => state.text)
    // @ts-ignore
    const {id} = useParams()
    useEffect(() => {
        token && dispatch(getText(id, token))
        token && dispatch(getComments(id, token))
    }, [])

    return (
        <>
            <div className={classes.post}>
                <Paper className={classes.mainFeaturedPost}>
                    <div className={classes.overlay}/>
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFeaturedPostContent}>
                                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Typography variant="h5" color="inherit" paragraph>
                                    {post.author} at {post.createdAt}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
                <p>{post.content}</p>


            </div>
            <Comments/>
        </>
    );
}