import { Button, Container } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logOut, loginWithGoogle } from "../../features/authentication";
import { UserContext } from "../../features/authentication/user-context";

import GoogleIcon from '@mui/icons-material/Google';

import './account-page.css';
import { LoadingPage } from "../../features/ui";

export const AccountPage = () => {
    const navigate = useNavigate();

    const { user, loadingUser } = useContext(UserContext);

    return (
        <Container id="accountPageContainer">
            {loadingUser ?
                <LoadingPage />
                :
                (user && !user.isAnonymous) ?
                    <>
                        <h1>My Account</h1>
                        <h2>Account Details</h2>
                        <p>Name: {user.displayName}</p>
                        <p>Email: {user.email}</p>
                        <Button onClick={() => logOut()} >Logout</Button>
                    </>
                    :
                    <>
                        <h1>Login</h1>
                        <br />
                        <Button onClick={() => {
                                loginWithGoogle()
                                    .then(() => navigate("/account"))
                        }}><GoogleIcon /> &nbsp; Login with google</Button>
                    </>
            }
        </Container>
    )
}