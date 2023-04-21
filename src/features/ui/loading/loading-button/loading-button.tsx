import { Button } from "@mui/material"
import { PropsWithChildren } from "react"

type LoadingButtonProps = {
    isLoading: boolean,
    onClick: () => void
}

export const LoadingButton = (props: PropsWithChildren<LoadingButtonProps>) => {

    const buttonChildren = props.isLoading ? 'Loading...' : props.children;

    return (
        <Button onClick={props.onClick} disabled={props.isLoading}>
            {buttonChildren}
        </Button>
    )

}