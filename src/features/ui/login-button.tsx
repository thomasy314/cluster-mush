import { Button } from "@mui/material";
import { loginWithGoogle } from "../authentication";

import GoogleIcon from '@mui/icons-material/Google';

export const LoginButton = () => {

    return (
        <Button onClick={() => {
            loginWithGoogle()
        }}><GoogleIcon /> &nbsp; Login with google</Button>
    )
    /*

    */
}