import {Backdrop, Fade, Modal} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useTypedSelector} from "../../domain/store";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);


const ModalError = () => {
    const classes = useStyles();
    const {isModalError, message} = useTypedSelector(state => state.modalError)
    return (
        <Modal className={classes.modal} open={isModalError} closeAfterTransition
               BackdropComponent={Backdrop}
               BackdropProps={{
                   timeout: 500,
               }}>
            <Fade in={isModalError}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">Error</h2>
                    <p id="transition-modal-description">{message}</p>
                </div>
            </Fade>
        </Modal>
    )
}

export default ModalError