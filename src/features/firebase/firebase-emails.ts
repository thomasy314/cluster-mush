import { addDoc, onSnapshot } from "firebase/firestore"
import { emailCollectionRef } from "./firebase"

export interface EmailProps {
    to: string,
    from?: string
}

type EmailMessage = {
    subject: string,
    text: string,
    html?: string,
}

export interface GenericEmailProps extends EmailProps {
    message: EmailMessage
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

export const sendEmail = (emailProps: EmailProps): Promise<void> => {

    return new Promise((resolve, reject) => {
        addDoc(emailCollectionRef, emailProps)
            .then(docRef => {
                const unSub = onSnapshot(docRef, emailDoc => {
                    const deliverInfo = emailDoc.get('delivery');
                    if (deliverInfo) {
                        const deliveryState = deliverInfo['state'];
                        if (deliveryState === 'ERROR') {
                            reject(emailDoc.data)
                        }

                        if (deliveryState === 'SUCCESS') {
                            unSub();
                            resolve();
                        }
                    }
                })
            })
            .catch(err => reject(err));
    })
}