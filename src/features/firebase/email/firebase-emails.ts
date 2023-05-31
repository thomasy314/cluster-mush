import { addDoc, onSnapshot } from "firebase/firestore"
import { emailCollectionRef } from "../firebase"
import { EmailProps } from "./firebase-email-templates";

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