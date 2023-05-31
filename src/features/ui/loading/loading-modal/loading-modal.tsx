import { Backdrop, CircularProgress } from "@mui/material";

type LoadingModalProps = {
    open: boolean,
    message?: string
}

export const LoadingModal = (props: LoadingModalProps) => {

    return (
        <Backdrop
            open={props.open}
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <div style={{textAlign: 'center'}}>
                <CircularProgress color="inherit" />
                {props.message && <p>{props.message}</p>}
            </div>
        </Backdrop>
    )
}