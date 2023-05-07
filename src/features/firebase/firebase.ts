// Import the functions you need from the SDKs you need
import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { collection, CollectionReference, Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";
import { Auth, getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAJNJUmQa_T8D5gntDo0HMDdaRLoj6Pb-Q",
  authDomain: "cluster-mush.firebaseapp.com",
  projectId: "cluster-mush",
  storageBucket: "cluster-mush.appspot.com",
  messagingSenderId: "509688409248",
  appId: "1:509688409248:web:9b5f2b239b32536b81adc5",
  measurementId: "G-8VH4493YMR"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics: Analytics = getAnalytics(app);

// Firestore
const firestoreDb: Firestore = getFirestore(app);
export const stripeProductsCollectionRef: CollectionReference = collection(firestoreDb, 'products');
export const stripeCustomerCollectionRef: CollectionReference = collection(firestoreDb, 'customers');

// Firebase Storage
export const firebaseStorage: FirebaseStorage = getStorage(app);

// Firebase Auth
export const googleAuthProvider: GoogleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: "select_account"
});
export const firebaseAuth: Auth = getAuth(app);