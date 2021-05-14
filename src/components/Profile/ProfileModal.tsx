import styled from "styled-components";
import {Backdrop, Fade, Modal} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

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

interface IProps {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void,
    className?: string
}

const Element = ({isOpen, setOpen, className}: IProps) => {
    const classes = useStyles();
    return (
        <Modal className={classes.modal} open={isOpen} onClose={() => setOpen(false)} closeAfterTransition
               BackdropComponent={Backdrop}
               BackdropProps={{
                   timeout: 500,
               }}>
            <Fade in={isOpen}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">Change Your Date</h2>
                    <p id="transition-modal-description">react-transition-group animates me.</p>
                </div>
            </Fade>
        </Modal>
    )
}

const ProfileModal = styled(Element)``

export default ProfileModal