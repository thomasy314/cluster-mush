import { Button, Container } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logOut, loginWithGoogle } from "../../features/authentication";
import { UserContext } from "../../features/authentication/user-context";

import GoogleButton from "react-google-button";

import './account-page.css';

export const AccountPage = () => {
    const navigate = useNavigate();

    const user = useContext(UserContext);

    return (
        <Container id="accountPageContainer">
            {user && !user.isAnonymous ?
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
                    <GoogleButton
                        onClick={() => {
                            loginWithGoogle()
                                .then(() => navigate("/account"))
                        }}
                    />
                </>
            }
        </Container>
    )
}