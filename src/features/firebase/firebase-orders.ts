import { collection, getDocs, query, where } from "firebase/firestore"
import { stripeCustomerCollectionRef } from "./firebase"

type PaymentItemData = {
    id: string,
    description: string,
    quantity: number
}

export type CustomerPaymnetData = {
    id: string,
    itemDataList: PaymentItemData[],
    amount: number,
    createdEpoch: number,
    trackingInfo?: string
}

export const getCustomerPayments = (customerId: string): Promise<CustomerPaymnetData[]> => {
    const paymentsCollectionRef = collection(stripeCustomerCollectionRef, customerId, 'payments');
    const q = query(paymentsCollectionRef, where("status", "==", "succeeded"));

    return new Promise((resolve, reject) => {
        getDocs(q)
            .then(paymentDocsList => {
                const paymentData = paymentDocsList.docs.map((paymentDoc): CustomerPaymnetData => {

                    const orderId = paymentDoc.get('id');
                    const itemDataList = paymentDoc.get('items').map((rawItem: PaymentItemData) => rawItem);
                    const amount = paymentDoc.get('amount')/100;
                    const trackingInfo = paymentDoc.get('metadata')['tracking_info'];
                    const createdEpoch = paymentDoc.get('created');

                    return {
                        id: orderId,
                        itemDataList: itemDataList,
                        amount,
                        createdEpoch,
                        trackingInfo
                    }
                }) 

                resolve(paymentData);
            })
            .catch(err => {
                console.log(err);
                // TODO: add custom error here
                reject(err);
            });
    })
}