import { Button, Container, Grid, Link } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { logOut } from "../../features/authentication";
import { UserContext } from "../../features/authentication/user-context";


import { CustomerPaymentData, getCustomerPayments } from "../../features/firebase";
import { LoadingPage, LoginButton } from "../../features/ui";
import './account-page.css';

export const AccountPage = () => {

    const { user, loadingUser } = useContext(UserContext);
    const [userPayments, setUserPayments] = useState<CustomerPaymentData[]>([]);

    const uspsTrackingLLinkStart = "https://tools.usps.com/go/TrackConfirmAction_input?strOrigTrackNum=";

    useEffect(() => {
        if (user !== null) {
            getCustomerPayments(user.uid)
                .then(setUserPayments)
                // Add error banner
                .catch(console.log);
        }
    }, [user])

    const userPaymentDisplay = (
        <Grid container alignItems="center" justifyContent="center" textAlign='left'>
            <Grid item xs={3}>
                <h3>Order Id</h3>
            </Grid>
            <Grid item xs={3}>
                <h3>Date</h3>
            </Grid>
            <Grid item xs={3}>
                <h3>Total</h3>
            </Grid>
            <Grid item xs={3}>
                <h3>Tracking</h3>
            </Grid>
            {userPayments.map(paymentData => {

                const d = new Date(0);
                d.setUTCSeconds(paymentData.createdEpoch);
                const readableDate = d.toDateString().split(' ').slice(1).join(' ');

                return (
                    <React.Fragment key={paymentData.id}>
                        <Grid item xs={3}>
                            <p>{paymentData.id.substring(0, 10)}</p>
                        </Grid>
                        <Grid item xs={3}>
                            <p>{readableDate}</p>
                        </Grid>
                        <Grid item xs={3}>
                            <p>${paymentData.amount.toFixed(2)}</p>
                        </Grid>
                        <Grid item xs={3} justifyContent="center">
                            {
                                paymentData.trackingInfo ?
                                    <Link target="_blank" href={uspsTrackingLLinkStart + paymentData.trackingInfo}>{paymentData.trackingInfo}</Link>
                                    :
                                    <p>Preparing</p>
                            }
                        </Grid>
                        <Grid textAlign='left' item xs={12}>
                            <b>Items:</b>
                            <br />
                            <ul>
                                {paymentData.itemDataList.map(data => <li key={data.id}>{data.description} x {data.quantity}</li>)}
                            </ul>
                        </Grid>
                    </React.Fragment>
                )
            })}
        </Grid>
    )


    return (
        <Container id="accountPageContainer">
            {loadingUser ?
                <LoadingPage />
                :
                (user && !user.isAnonymous) ?
                    <>
                        <h1>My Account</h1>
                        <Button onClick={() => logOut()} >Logout</Button>
                        <h2>Account Details</h2>
                        <p>Name: {user.displayName}</p>
                        <p>Email: {user.email}</p>
                        <h2>Orders</h2>
                        {userPaymentDisplay}
                    </>
                    :
                    <>
                        <h1>Login</h1>
                        <br />
                        <LoginButton />
                    </>
            }
        </Container>
    )
}