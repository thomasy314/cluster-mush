/*
Email type descriptions:
    Confirm - emails sent to customer to confirm action
    Inform  - emails sent to Cluster Mush to inform action is required
*/

export interface EmailProps {
    to: string,
    from: string
}

export interface GenericEmailProps extends EmailProps {
    message: {
        subject: string,
        text: string,
        html?: string
    }
}

export interface ContactConfirmEmailProps extends EmailProps {
    template: {
        name: 'contact-confirm'
    }
}

export interface ContactInformEmailProps extends EmailProps {
    template: {
        name: 'contact-inform',
        data: {
            senderEmail: string,
            senderName: string,
            senderMessage: string
        }
    }
}

export interface DeleteMyDataConfirmEmailProps extends EmailProps {
    template: {
        name: 'delete-my-data-confirm',
        data: {
            deleteAccount: boolean
        }
    }
}

export interface DeleteMyDataInformEmailProps extends EmailProps {
    template: {
        name: 'delete-my-data-inform',
        data: {
            senderId: string,
            senderEmail: string,
            deleteAccount: boolean
        }
    }
}