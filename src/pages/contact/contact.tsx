import { Alert, Button, Container, Grid, TextField } from "@mui/material";
import { useState } from "react";

import validator from 'validator';
import { ClusterMushEmails, sendEmail } from "../../features/firebase";
import { ContactConfirmEmailProps, ContactInformEmailProps } from "../../features/firebase/email/firebase-email-templates";
import { LoadingModal } from "../../features/ui";

export const ContactPage = () => {

    const [sentMailSuccessful, setSendMailSuccessful] = useState<boolean | null>(null);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [isValidName, setIsValidName] = useState<boolean>(true);
    const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
    const [isValidMessage, setIsValidMessage] = useState<boolean>(true);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const validateName = (): boolean => {
        const isValid = name.length > 0;
        setIsValidName(isValid);
        return isValid;
    }

    const validateEmail = (): boolean => {
        const isValid = validator.isEmail(email);
        setIsValidEmail(isValid);
        return isValid;
    }

    const validateMessage = (): boolean => {
        const isValid = message.length > 0;
        setIsValidMessage(isValid);
        return isValid;
    }

    const clearInput = () => {
        setName('');
        setIsValidName(true);
        setEmail('');
        setIsValidEmail(true);
        setMessage('');
        setIsValidMessage(true);
    }

    const validateAndSend = () => {
        const validName = validateName();
        const validEmail = validateEmail();
        const validMessage = validateMessage();

        if (validName && validEmail && validMessage) {
            setIsLoading(true);

            const contactInform: ContactInformEmailProps = {
                to: ClusterMushEmails.SUPPORT,
                from: ClusterMushEmails.SUPPORT,
                template: {
                    name: 'contact-inform',
                    data: {
                        senderName: name,
                        senderEmail: email,
                        senderMessage: message
                    }
                }
            }

            const contactConfirm: ContactConfirmEmailProps = {
                to: email,
                from: ClusterMushEmails.SUPPORT,
                template: {
                    name: 'contact-confirm'
                }
            }

            sendEmail(contactInform)
                .then(() =>
                    sendEmail(contactConfirm)
                        .then(() => setSendMailSuccessful(true))
                        .catch(() => setSendMailSuccessful(false))
                        .finally(() => {
                            clearInput();
                            setIsLoading(false);
                        })
                )
        }
    }

    const gridRowStyle = {
        marginBottom: '1em'
    }

    return (
        <Container sx={{ paddingBottom: "10vh" }}>
            <LoadingModal open={isLoading} message="Sending..." />
            <h1>Contact Cluster Mush</h1>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <p>Do you want to update, cancel, or return an order? Please reach out to us, we would love to hear from you!</p>
                    <p>Have you found some kind of error on the website? Please reach out to us, we would love to hear from you!</p>
                    <p>Is there something you would like us to make in the future? Please reach out to us, we would love to hear from you!</p>
                    <p>Please reach out to us, we would love to hear from you!</p>
                    <h2>Send a message</h2>
                </Grid>
                <Grid item xs={0} md={6} />
                <Grid item style={gridRowStyle} xs={12} md={6}>
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        label="Name"
                        value={name}
                        error={!isValidName}
                        onChange={event => setName(event.target.value)}
                    />
                </Grid>
                <Grid item xs={0} md={6} />
                <Grid item style={gridRowStyle} xs={12} md={6}>
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        label="Email"
                        value={email}
                        error={!isValidEmail}
                        onChange={event => setEmail(event.target.value)}
                    />
                </Grid>
                <Grid item xs={0} md={6} />
                <Grid item style={gridRowStyle} xs={12} md={6}>
                    <TextField
                        fullWidth
                        required
                        multiline
                        minRows={4}
                        variant="outlined"
                        label="Message"
                        value={message}
                        error={!isValidMessage}
                        onChange={event => setMessage(event.target.value)}
                    />
                </Grid>
                <Grid item xs={0} md={6} />
            </Grid>
            {(!isValidName || !isValidEmail || !isValidMessage) && <Alert severity="error">Oops! Please ensure to fill out all required fields with valid inputs</Alert>}
            {sentMailSuccessful === false && <Alert severity="error" >Failed to send, please try again</Alert>}
            {sentMailSuccessful === true && <Alert severity="success" >Successfully sent! We will reach out to you soon!</Alert>}
            <br />
            <Button onClick={validateAndSend}>Send</Button>
        </Container>
    )
}