
import { Alert, Button, Container } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../features/authentication/user-context";
import { DeleteMyDataConfirmEmailProps, DeleteMyDataInformEmailProps, sendEmail } from "../../features/firebase";
import { ClusterMushEmails } from "../../features/firebase/email/firebase-cluster-mush-emails";
import { LoadingModal, LoginButton } from "../../features/ui";
import { logOut } from "../../features/authentication";

export const DeleteMyDataPage = () => {

    const user = useContext(UserContext);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [sentMailSuccessful, setSendMailSuccessful] = useState<boolean | null>(null);

    const accountProvider = user.user?.providerData.map(pd => pd.providerId).join(", ");

    const requestDataDelete = (deleteAccount: boolean) => {

        // TODO: Make this not janky as hell
        if (user.user === null || user.user.email === null) {
            logOut();
            return;
        }

        setIsLoading(true);

        const deleteMyDataInform: DeleteMyDataInformEmailProps = {
            to: ClusterMushEmails.DELETE_MY_DATA,
            from: ClusterMushEmails.DELETE_MY_DATA,
            template: {
                name: "delete-my-data-inform",
                data: {
                    senderId: user.user.uid,
                    senderEmail: user.user.email,
                    deleteAccount: deleteAccount
                }
            }
        }

        const deleteMyDataConfirm: DeleteMyDataConfirmEmailProps = {
            to: user.user.email,
            from: ClusterMushEmails.DELETE_MY_DATA,
            template: {
                name: "delete-my-data-confirm",
                data: {
                    deleteAccount: deleteAccount
                }
            },
        }

        sendEmail(deleteMyDataInform)
            .then(() =>
                sendEmail(deleteMyDataConfirm)
                    .then(() => setSendMailSuccessful(true))
                    .catch(() => setSendMailSuccessful(false))
                    .finally(() =>
                        setIsLoading(false)
                    )
            )
            .catch(() => setSendMailSuccessful(false))
    }

    console.log(user)

    return (
        <Container>
            <LoadingModal open={isLoading} message="requesting data deletion..." />
            <h1>Delete Customer Data Request</h1>
            {!user.user || user.user?.isAnonymous ? <LoginButton /> :
                <>
                    <h2>User Information</h2>
                    <p><b>Account Name</b>: {user.user?.displayName}</p>
                    <p><b>Account Email</b>: {user.user?.email}</p>
                    <p><b>Account Provider(s)</b>: {accountProvider}</p>
                    {sentMailSuccessful === false && <Alert severity="error" >Failed to request data deletion, please try again</Alert>}
                    {sentMailSuccessful === true && <Alert severity="success" >Successfully requested data deletion! We will processes this request soon!</Alert>}
                    <br />
                    <Button onClick={() => requestDataDelete(false)}>Request account data delete</Button>
                    <br />
                    <br />
                    <Button onClick={() => requestDataDelete(true)}>Request account data delete AND account deleted</Button>
                </>
            }
        </Container>
    )
}