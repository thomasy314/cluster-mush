import { Backdrop, CircularProgress } from "@mui/material";

type LoadingModalProps = {
    open: boolean,
}

export const LoadingModal = (props: LoadingModalProps) => {

    return (
        <Backdrop
            open={props.open}
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}